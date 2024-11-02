import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import { FC } from 'react'

interface PropsType {}

const ProfileFormFields: FC<PropsType> = () => {
  return (
    <FormBox>
      <FormWrapper title='First Name*' variant='grid'>
        <Input type='text' name='firstName' aria-label='first name' placeholder='Enter your first name' />
      </FormWrapper>

      <FormWrapper title='Last Name*' variant='grid'>
        <Input type='text' name='lastName' aria-label='last name' placeholder='Enter your last name' />
      </FormWrapper>

      <FormWrapper title='Email' variant='grid'>
        <Input type='email' name='email' aria-label='email' placeholder='Enter your Email' />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFields
