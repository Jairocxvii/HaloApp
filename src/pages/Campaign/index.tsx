import React, { useEffect, useState, MouseEvent, useMemo } from 'react'
import MetadataService from '../../services/Metadata.service';
import Icampaign from '../../models/ICampign';
import CampaignCard from '../../parts/campaignCard';
import Alert from '../../parts/Alert';
import IAlert, { TypeAlert } from '../../models/IAlert';
import Spinner from '../../parts/spinner';

function Campaign() {
    const [campaigns, setCampaigns] = useState<Icampaign[]>([]);

    const [filterTeam, setfilterTeam] = useState<string | null>("");
    const [ErrorA, setErrorA] = useState<IAlert>({
        Title: "",
        description: "",
        Type: TypeAlert.danger
    })
    const filteredCampaigns = useMemo(
        () =>
            campaigns.filter((item) => {
                return filterTeam == null ? item : item.type.toLowerCase().includes(filterTeam.toLowerCase());
            }),//escuchara si cambiar alguno de los input agregador y hara una llave entre el valor modicado y el retorno de la
        [campaigns, filterTeam]
    );
    const [ErrorData, setErrorData] = useState(false)
    const handleClickTeam = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let team = e.currentTarget.getAttribute('value');

        setfilterTeam(team);
    }
    useEffect(() => {
        MetadataService.getCampaignMissions().then(response => {
            setCampaigns(response.data);
            setErrorData(false);
        }).catch(error => {

            setErrorData(true);
            setErrorA({
                Title: "Get Campaign Error",
                description: error.message,
                Type: TypeAlert.danger
            })
        })
    }, [])
    return (
        <div className="  p-6 ">
            <div className="flex justify-center mb-4 ">
                <button type="button" className={filterTeam === "BlueTeam" ? "bg-ligth-blue-button  shadow-ligth-blue-background-neumor-in  text-white font-bold py-2 px-4 rounded-full w-1/2 lg:w-1/4 mx-1" : "bg-ligth-blue-button  hover:shadow-ligth-blue-background-neumor-in text-ligth-blue-text hover:text-white font-bold py-2 px-4 rounded-full w-1/2 lg:w-1/4 mx-1 "} onClick={handleClickTeam} value="BlueTeam">Blue Team</button>
                <button type="button" className={filterTeam === "OsirisTeam" ? "bg-ligth-blue-button  shadow-ligth-blue-background-neumor-in  text-white font-bold py-2 px-4 rounded-full w-1/2 lg:w-1/4 mx-1" : "bg-ligth-blue-button  hover:shadow-ligth-blue-background-neumor-in text-ligth-blue-text hover:text-white font-bold py-2 px-4 rounded-full w-1/2 lg:w-1/4 mx-1 "} onClick={handleClickTeam} value="OsirisTeam">Osiris Team</button>
            </div>
            {campaigns.length === 0 && <Spinner />}
            {ErrorData && <Alert Type={ErrorA.Type} Title={ErrorA.Title} description={ErrorA.description} />}
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 m-auto gap-3">
                {
                    //campaigns.filter(x => filterTeam !== null ? x.type === filterTeam : x.type !== null)
                    filteredCampaigns.map(Campaign => <CampaignCard name={Campaign.name}
                        missionNumber={Campaign.missionNumber}
                        description={Campaign.description}
                        imageUrl={Campaign.imageUrl}
                        type={Campaign.type}
                        id={Campaign.id} />)
                }
            </div>
        </div>
    )
}

export default Campaign
