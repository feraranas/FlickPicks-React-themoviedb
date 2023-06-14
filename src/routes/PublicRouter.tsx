import { Header } from 'components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRouter = () => {
  return (
   <>
    <Header />
    <Outlet />
   </>
  )
}

export default PublicRouter