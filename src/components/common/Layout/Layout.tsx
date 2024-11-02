import { FC } from 'react'
import './Layout.scss'
import { Outlet } from 'react-router-dom'
import Header from '@/components/widgets/layout/Header/Header'

interface PropsType {
  children: ''
}

const Layout: FC<PropsType> = () => {
  return (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
