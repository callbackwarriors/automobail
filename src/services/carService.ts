import requests from "services/httpService";
import { IService } from "type";

class CarService {
  getServices(): Promise<IService[]> {
    return requests.get("/services");
  }

  getServiceByID(id: string): Promise<IService> {
    return requests.get(`/services/${id}`);
  }

  addService(body: {}): Promise<IService> {
    return requests.post(`/services/`, body);
  }

  updateService(id: string, body: {}): Promise<IService> {
    return requests.post(`/services/${id}`, body);
  }

  deleteService(id: string): Promise<IService> {
    return requests.delete(`/services/${id}`);
  }
}

export default new CarService();
