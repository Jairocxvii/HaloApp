import React from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card() {

    let data = {
        type: "",
        title: "",
        img: "https://content.halocdn.com/media/Default/games/halo-5-guardians/api/enemies/hunter-542x305-d8afd82f28a4454aaff3a17b17766c80.png",
        text: "",
        buttons: ""
    }
    const bgimage = {
        backgroundImage: `url('${data.img}')`
    }
    return (

        <div className="m-auto mt-1 content-center w-full  lg:w-4/5 shadow-md  rounded-md flex ">
            <img className="w-1/2 max-w-full  rounded-l-sm" src={data.img} alt="Iamge"></img>
            <div className="w-full flex  h-auto  flex-col">
                <div className="title  text-gray-900 font-bold text-xl pl-2 rounded-t-md ">
                    {data.title} sdfsd </div>
                <div className="text  ">
                    <div className="text-gray-900 font-bold text-xl pl-2 mb-2">{data.text} sdsf</div>
                </div>
                <div className="bg-gray-300 pl-2   items-center justify-between transition hover:bg-gray-100 rounded-br-md">

                    <FontAwesomeIcon className="" icon={faArrowRight} />
                </div>
            </div>
        </div >



    )
}

export default Card
