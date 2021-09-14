import React from 'react'
import { MetadaCard } from '../../models/MetadaCard'
import MetadataMenuCard from '../../parts/MetadataMenuCard';

function  MetadaMenu() {

    var firtsMetadata: MetadaCard;
    firtsMetadata = new MetadaCard()

    firtsMetadata.UrlRedirect = "/Campaign";
    firtsMetadata.Title = "Campaign";
    firtsMetadata.imageUrl = "https://content.halocdn.com/media/Default/games/halo-5-guardians/media/campaign-blue-team/thumbs/h5-guardians-campaign-blue-team-hunters-075bb3c8f805427888cf8d04468fb214.jpg";
    firtsMetadata.order = 1;

    var metaDataItems = [];
    metaDataItems.push(firtsMetadata);
 


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:w-3/4 md:m-auto">
            {
                metaDataItems.map(MetaDataItem => <MetadataMenuCard UrlRedirect={MetaDataItem.UrlRedirect}
                    Title={MetaDataItem.Title}
                    imageUrl={MetaDataItem.imageUrl}
                    order={MetaDataItem.order} />)
            }

        </div>
    )
}



export default MetadaMenu
