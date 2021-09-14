import http from "../http-common";
class MetadataService {
    getCampaignMissions() {
        return http.get("metadata/h5/metadata/campaign-missions");
    }
    getEnemies() {
        return http.get("metadata/h5/metadata/enemies");
    }
    getCommendations() {
        return http.get("metadata/h5/metadata/commendations");
    }
    getMaps() {
        return http.get("metadata/h5/metadata/maps");
    }


    /*get(id: string) {
        return http.get(`/tutorials/${id}`);
    }

    create(data: ICampign) {
        return http.post("/tutorials", data);
    }

    update(data: ICampign, id: any) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id: any) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorials`);
    }

    findByTitle(title: string) {
        return http.get(`/tutorials?title=${title}`);
    }*/
}

export default new MetadataService();