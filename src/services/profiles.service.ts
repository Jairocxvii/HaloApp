import http from "../http-common";
//import ICampign from "../models/Campign"

class ProfilesDataService {
   getPlayer() {
        return http.get("/");
    }
/*
    get(id: string) {
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

export default new ProfilesDataService();