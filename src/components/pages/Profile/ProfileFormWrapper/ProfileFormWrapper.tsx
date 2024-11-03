import Button from '@/components/ui/buttons/Button/Button'
import type { DetailedHTMLProps, FC, FormEvent, FormHTMLAttributes, ReactElement, ReactNode } from 'react'
import '../Profile.scss'

interface PropsType extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  title: string
  text: string
  children?: ReactNode
  button?: ReactElement<HTMLButtonElement>
  handleSave?: () => void
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

const ProfileFormWrapper: FC<PropsType> = ({ title, text, children, button, onSubmit }) => {
  return (
    <form className='profile-form-wrapper' onSubmit={onSubmit}>
      <div className='profile-form-wrapper__head'>
        <h1 className='profile-form-wrapper__title'>{title}</h1>
        <p className='profile-form-wrapper__text'>{text}</p>
      </div>

      {!!button && <div className='profile-form-wrapper__btn-wrap'>{button}</div>}

      <div className='profile-form-wrapper__body'>{children}</div>

      <div className='profile-form-wrapper__footer'>
        <Button type='submit' className='profile-form-wrapper__save-btn'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default ProfileFormWrapper
