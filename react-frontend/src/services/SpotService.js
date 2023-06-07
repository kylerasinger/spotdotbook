import axios from 'axios';

const SPOT_API_BASE_URL = "http://localhost:8080/api/v1/spots";

class SpotService {

    getSpots(){
        return axios.get(SPOT_API_BASE_URL);
    }
    
    createSpot(spot){
        return axios.post(SPOT_API_BASE_URL);
    }

    getSpotById(spotId){
        return axios.get(SPOT_API_BASE_URL + "/" + spotId);
    }

    updateSpot(spot, spotId){
        return axios.put(SPOT_API_BASE_URL + "/" + spotId, spot);
    }

    deleteSpot(spotId){
        return axios.delete(SPOT_API_BASE_URL + "/" + spotId);
    }
}

export default new SpotService();