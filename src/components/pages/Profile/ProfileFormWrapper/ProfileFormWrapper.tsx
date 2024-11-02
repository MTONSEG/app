import Button from '@/components/ui/buttons/Button'
import type { DetailedHTMLProps, FC, FormHTMLAttributes, ReactElement, ReactNode } from 'react'
import '../Profile.scss'

interface PropsType extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  title: string
  text: string
  children?: ReactNode
  button?: ReactElement<HTMLButtonElement>
  handleSave?: () => void
}

const ProfileFormWrapper: FC<PropsType> = ({ title, text, children, button, handleSave }) => {
  return (
    <form className='profile-form-wrapper'>
      <div className='profile-form-wrapper__head'>
        <h1 className='profile-form-wrapper__title'>{title}</h1>
        <p className='profile-form-wrapper__text'>{text}</p>
      </div>

      {!!button && <div className='profile-form-wrapper__btn-wrap'>{button}</div>}

      <div className='profile-form-wrapper__body'>{children}</div>

      <div className='profile-form-wrapper__footer'>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </form>
  )
}

export default ProfileFormWrapper
