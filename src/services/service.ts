import httpCommon from "../api/httpCommon"
import LoginInterface from "../models/login";
import UserInterface from "../models/user";

const registerAdmin = (data: UserInterface) => {
    return httpCommon.post('/admins/create', data)
}

const registerUser = (data:UserInterface) => {
    return httpCommon.post('/users/create',data)
}

const loginAdmin = (data:LoginInterface) => {
    return httpCommon.post('/admins/login', data)
}

const loginUser = (data:LoginInterface) => {
    return httpCommon.post('/login/user', data)
}

const listUser = () => {
    return httpCommon.get('/users')
}

const listAbsen = () => {
    return httpCommon.get('/absens')
}

const listJadwal = () => {
    return httpCommon.get('/jadwals')
}

const addAbsen = (id:any) => {
    return httpCommon.post('/absen', id)
}

const addJadwal = (data:any) => {
    return httpCommon.post('/jadwals/create', data)
}

const detailJadwal = (id:any) => {
    return httpCommon.get('/jadwals/'+id)
}

export const httpService = {
    registerAdmin,
    loginAdmin,
    loginUser,
    listUser,
    registerUser,
    listAbsen,
    listJadwal,
    addAbsen,
    addJadwal,
    detailJadwal
}