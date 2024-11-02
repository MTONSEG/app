import Header from '@/components/widgets/layout/Header/Header'
import { FC, ReactNode } from 'react'
import './ProfileLayout.scss'

interface PropsType {
  children: ReactNode
}

const ProfileLayout: FC<PropsType> = ({ children }) => {
  return (
    <div className='profile-layout'>
      <Header />
      {children}
    </div>
  )
}

export default ProfileLayout
