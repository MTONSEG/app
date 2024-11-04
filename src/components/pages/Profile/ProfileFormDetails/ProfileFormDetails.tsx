import ProfileFormFields from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFields/ProfileFormFields'
import ProfileFormFile from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFile/ProfileFormFile'
import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import type { FormEvent } from 'react'

const ProfileFormDetails = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <ProfileFormWrapper
      animation='to-right'
      title='Profile Details'
      text='Add your to create a personal touch to your profile'
      onSubmit={handleSubmit}
    >
      <ProfileFormFile />
      <ProfileFormFields />
    </ProfileFormWrapper>
  )
}

export default ProfileFormDetails
