import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import ProfileFormWrapper from '@/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import { FC } from 'react'

interface PropsType {}

const ProfileFormDetails: FC<PropsType> = () => {
  return (
    <ProfileFormWrapper title='Profile Details' text='Add your to create a personal touch to your profile'>
      <FormBox>
        <FormWrapper title='Profile picture' variant='flex'>
          <Input />
        </FormWrapper>
      </FormBox>

      <FormBox>
        <FormWrapper title='First Name' variant='flex'>
          <Input />
        </FormWrapper>

        <FormWrapper title='Last Name' variant='flex'>
          <Input />
        </FormWrapper>

        <FormWrapper title='Email Name' variant='flex'>
          <Input />
        </FormWrapper>
      </FormBox>
    </ProfileFormWrapper>
  )
}

export default ProfileFormDetails
