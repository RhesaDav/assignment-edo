import React from 'react'
import Navbar from '../components/Navbar'

const AdminLayout = ({children}:any) => {
  return (
    <div>
        <Navbar isAdmin={true}/>
        {children}
    </div>
  )
}

export default AdminLayout