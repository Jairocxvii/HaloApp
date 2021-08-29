import React, { useState } from 'react'
import { fetch, API } from '../../services/';
import CardGamertag from '../card';

function SearchGamertag() {
    let gamertagInput = '';
    const [spartan, setSpartan] = useState({
        Gamertag: 0,
        Company: { Name: '', Id: '' },
        ServiceTag: true,
    })

    const handlerChange = e =>{
        gamertagInput = e.target.value;
    }
    const getSpartan = () => {
        API.getAppearance.url = API.getAppearance.url.replace("{player}", gamertagInput )
        fetch(API.getAppearance).then((response) => setSpartan(response.data)).catch((error) => alert(error));
    }
    return (
        <div className="container  mx-auto h-1/4 shadow-md lg:w-5/12 sm:w-3/4 bg mt-2 flex p-2 flex-col">
            <label className="block text-gray-700 text-sm font-bold mt-3" htmlFor="gametag">Gamertag</label>
            <input type="text" name="gamertag" onChange={handlerChange} className="shadow mt-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gamertag" />
            <button type="button" className="shadow mt-3 bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={getSpartan} >Consultar</button>
            <CardGamertag spartan={spartan ? spartan :  {
                Gamertag: 0,
                Company: { Name: '', Id: '' },
                ServiceTag: true,
            } }/>

        </div>
    )
}
export default SearchGamertag;