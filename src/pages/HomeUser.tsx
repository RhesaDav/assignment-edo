import React from 'react'
import Navbar from '../components/Navbar'
import { httpService } from '../services/service'

interface iUser {
  absen: boolean;
}

const HomeUser = () => {
  const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('user')|| ''))
  const [data,setData] = React.useState<iUser>({
    absen: false
  })

  const handleAbsen = () => {
    httpService.addAbsen({id: user._id}).then((res) => {
      setData(res.data)
    })
  }
  return (
    <div>
        <Navbar/>
        <div>
            <h1>User Logged In {user.name}</h1>
            {data.absen? (
              <button>Saya sudah absen</button>
              ): (
                <button className='bg-blue-500' onClick={handleAbsen}>Saya Hadir</button>
            )}
        </div>
    </div>
  )
}

export default HomeUser