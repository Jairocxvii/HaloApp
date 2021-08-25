import React from 'react'
import { fetch, API } from '../../services/';

function SearchGamertag() {
    const getSpartan = () => {
        API.getSpartan.url = API.getSpartan.url.replace("{player}","x5partan crossx")
        fetch(API.getSpartan).then((response) => response.json());
    }
    return (
        <>
            <label htmlFor="gametag">ingrese gamertag</label>
            <input type="text" name="gamertag" id="gamertag" />
            <button type="submit" onClick={getSpartan} >Consultar</button>
        </>
    )
}
export default SearchGamertag;