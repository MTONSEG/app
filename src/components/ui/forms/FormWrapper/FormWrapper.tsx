import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import './FormWrapper.scss'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  children: ReactNode
  variant?: 'default' | 'grid'
}

const FormWrapper: FC<PropsType> = ({ children, title, variant = 'default', ...props }) => {
  return (
    <div className={`form-wrapper form-wrapper--${variant}`} {...props}>
      <p className='form-wrapper__label'>{title}</p>
      {children}
    </div>
  )
}

export default FormWrapper
