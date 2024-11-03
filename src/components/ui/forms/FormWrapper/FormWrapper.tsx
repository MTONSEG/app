import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import './FormWrapper.scss'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children: ReactNode
  icon?: ReactNode
  variant?: 'default' | 'grid'
}

const FormWrapper: FC<PropsType> = ({ children, title, icon, variant = 'default', ...props }) => {
  return (
    <div className={`form-wrapper form-wrapper--${variant}`} {...props}>
      <p className='form-wrapper__label'>{title}</p>

      <div className={`form-wrapper__input-inner`}>
        {!!icon && <div className='form-wrapper__icon-wrap'>{icon}</div>}
        {children}
      </div>
    </div>
  )
}

export default FormWrapper
