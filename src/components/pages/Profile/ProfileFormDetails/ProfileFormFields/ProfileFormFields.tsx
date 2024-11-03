import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import { DICTIONARY } from '@/dictionaries'
import type { FC } from 'react'

interface PropsType {}

const ProfileFormFields: FC<PropsType> = () => {
  return (
    <FormBox>
      <FormWrapper title={`${DICTIONARY['en'].first_name}*`} variant='grid'>
        <Input
          type='text'
          name='firstName'
          aria-label={DICTIONARY['en'].enter_your_first_name}
          placeholder={DICTIONARY['en'].enter_your_first_name}
        />
      </FormWrapper>

      <FormWrapper title={`${DICTIONARY['en'].last_name}*`} variant='grid'>
        <Input
          type='text'
          name='lastName'
          aria-label={DICTIONARY['en'].enter_your_last_name}
          placeholder={DICTIONARY['en'].enter_your_last_name}
        />
      </FormWrapper>

      <FormWrapper title={DICTIONARY['en'].email} variant='grid'>
        <Input
          type='email'
          name='email'
          aria-label={DICTIONARY['en'].enter_your_email}
          placeholder={DICTIONARY['en'].enter_your_email}
        />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFields
