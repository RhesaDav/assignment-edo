import httpCommon from "../api/httpCommon"
import LoginInterface from "../models/login";
import UserInterface from "../models/user";

class httpService {

    registerAdmin = (data: UserInterface) => {
        return httpCommon.post<any>('/admins/create', data)
    }
    
    registerUser = (data:UserInterface) => {
        return httpCommon.post<any>('/users/create',data)
    }
    
    loginAdmin = (data:LoginInterface) => {
        return httpCommon.post<any>('/login/admin', data)
    }
    
    loginUser = (data:LoginInterface) => {
        return httpCommon.post<any>('/login/user', data)
    }
    
    listUser = () => {
        return httpCommon.get<any>('/users')
    }
    
    listAbsen = () => {
        return httpCommon.get<any>('/absens')
    }
    
    listJadwal = () => {
        return httpCommon.get<any>('/jadwals')
    }
    
    addAbsen = (id:any) => {
        return httpCommon.post<any>('/absen', id)
    }
    
    addJadwal = (data:any) => {
        return httpCommon.post<any>('/jadwals/create', data)
    }
    
    detailJadwal = (id:any) => {
        return httpCommon.get<any>('/jadwals/'+id)
    }
}

export default new httpService()


// export const httpService = {
//     registerAdmin,
//     loginAdmin,
//     loginUser,
//     listUser,
//     registerUser,
//     listAbsen,
//     listJadwal,
//     addAbsen,
//     addJadwal,
//     detailJadwal
// }