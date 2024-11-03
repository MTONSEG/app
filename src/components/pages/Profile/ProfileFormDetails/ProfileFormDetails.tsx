import ProfileFormFields from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFields/ProfileFormFields'
import ProfileFormFile from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFile/ProfileFormFile'
import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import type { FC } from 'react'

interface PropsType {}

const ProfileFormDetails: FC<PropsType> = () => {
  return (
    <ProfileFormWrapper title='Profile Details' text='Add your to create a personal touch to your profile'>
      <ProfileFormFile />
      <ProfileFormFields />
    </ProfileFormWrapper>
  )
}

export default ProfileFormDetails
