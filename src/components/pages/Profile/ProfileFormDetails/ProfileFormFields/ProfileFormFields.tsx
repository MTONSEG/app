import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import { DICTIONARY } from '@/dictionaries'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'

const ProfileFormFields = () => {
  const firstName = useAppSelector(state => state.user.firstName)
  const lastName = useAppSelector(state => state.user.lastName)
  const email = useAppSelector(state => state.user.email)

  const { setFirstName, setLastName, setEmail } = useActions('user')

  return (
    <FormBox>
      <FormWrapper title={`${DICTIONARY['en'].first_name}*`} variant='grid'>
        <Input
          type='text'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.currentTarget.value)}
          aria-label={DICTIONARY['en'].enter_your_first_name}
          placeholder={DICTIONARY['en'].enter_your_first_name}
        />
      </FormWrapper>

      <FormWrapper title={`${DICTIONARY['en'].last_name}*`} variant='grid'>
        <Input
          type='text'
          name='lastName'
          value={lastName}
          isError
          onChange={e => setLastName(e.currentTarget.value)}
          aria-label={DICTIONARY['en'].enter_your_last_name}
          placeholder={DICTIONARY['en'].enter_your_last_name}
        />
      </FormWrapper>

      <FormWrapper title={DICTIONARY['en'].email} variant='grid'>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          aria-label={DICTIONARY['en'].enter_your_email}
          placeholder={DICTIONARY['en'].enter_your_email}
        />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFields
