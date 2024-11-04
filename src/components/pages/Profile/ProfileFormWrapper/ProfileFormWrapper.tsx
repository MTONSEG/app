import Button from '@/components/ui/buttons/Button/Button'
import Heading from '@/components/ui/typography/Heading/Heading'
import Text from '@/components/ui/typography/Text/Text'
import type {
  DetailedHTMLProps,
  FC,
  FormEvent,
  FormHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import '../Profile.scss'
import { DICTIONARY } from '@/dictionaries'

interface PropsType
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  title: string
  text: string
  children?: ReactNode
  button?: ReactElement<HTMLButtonElement>
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

const ProfileFormWrapper: FC<PropsType> = ({
  title,
  text,
  children,
  button,
  onSubmit,
}) => {
  return (
    <form className={`profile-form-wrapper`} onSubmit={onSubmit}>
      <div className='profile-form-wrapper__head'>
        <Heading className='profile-form-wrapper__title' weight='bold'>
          {title}
        </Heading>

        <Text className='profile-form-wrapper__text' component='p'>
          {text}
        </Text>
      </div>

      {!!button && <div className='profile-form-wrapper__btn-wrap'>{button}</div>}

      <div className='profile-form-wrapper__body'>{children}</div>

      <div className='profile-form-wrapper__footer'>
        <Button type='submit' className='profile-form-wrapper__save-btn'>
          {DICTIONARY['en'].save}
        </Button>
      </div>
    </form>
  )
}

export default ProfileFormWrapper
