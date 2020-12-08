import axios from 'axios'

const CLASS_API_BASE_URL = "http://localhost:8080/api/v1/classes"

class ListClassService {

    getClasses(){
        return axios.get(CLASS_API_BASE_URL);
    }

    createClass(clazz){
        return axios.post(CLASS_API_BASE_URL, clazz);
    }

    getClassByID(id){
        return axios.get(CLASS_API_BASE_URL + '/' + id);
    }

    getClassByName(ten){
        return axios.get(CLASS_API_BASE_URL + '/search/' + ten)
    }

    updateClass(clazz, id){
        return axios.put(CLASS_API_BASE_URL + '/' + id, clazz);
    }

    deleteClass(id){
        return axios.delete(CLASS_API_BASE_URL + '/' + id);
    }

}

export default new ListClassService()