import ProfileLayout from '@/components/pages/Profile/ProfileLayout/ProfileLayout'
import ProfilePreview from '@/components/pages/Profile/ProfilePreview/ProfilePreview'
import type { FC } from 'react'
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
