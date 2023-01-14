import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import { httpService } from '../services/service'

const Absen = () => {
  const [data,setData] = React.useState([])
  const fetchData = () => {
    httpService.listAbsen().then((res) => {
      setData(res.data.data)
      console.log(res.data.data)
    })

  }
  React.useEffect(()=> {
    fetchData()
  },[])
  return (
    <AdminLayout>
      <h1>Daftar Absen</h1>
      {data?.map((item:any,index) => (
      <ul key={index}>
        <li>{item.user.name}</li>
      </ul>
      ))}
    </AdminLayout>
  )
}

export default Absen