import ProfileLayout from '@/pages/Profile/ProfileLayout/ProfileLayout'
import ProfilePreview from '@/pages/Profile/ProfilePreview/ProfilePreview'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './Profile.scss'

interface PropsType {}

const Profile: FC<PropsType> = () => {
  return (
    <ProfileLayout>
      <main className='profile'>
        <ProfilePreview />
        <Outlet />
      </main>
    </ProfileLayout>
  )
}

export default Profile
