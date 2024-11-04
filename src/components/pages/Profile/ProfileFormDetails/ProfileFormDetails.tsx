import ProfileFormFields from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFields/ProfileFormFields'
import ProfileFormFile from '@/components/pages/Profile/ProfileFormDetails/ProfileFormFile/ProfileFormFile'
import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import { DICTIONARY } from '@/dictionaries'
import useToast from '@/hooks/common/useToast'
import type { FormEvent } from 'react'

const ProfileFormDetails = () => {
  const showToast = useToast()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    showToast(DICTIONARY['en'].your_changes_successfully, 'success')
  }

  return (
    <ProfileFormWrapper
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
