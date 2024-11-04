import ProfileLayout from '@/components/pages/Profile/ProfileLayout/ProfileLayout'
import ProfilePreview from '@/components/pages/Profile/ProfilePreview/ProfilePreview'
import { Outlet } from 'react-router-dom'
import './Profile.scss'


const Profile = () => {
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
