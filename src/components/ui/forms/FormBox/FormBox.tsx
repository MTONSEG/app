import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import './FormBox.scss'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const FormBox: FC<PropsType> = ({ children, className = '', ...props }) => {
  return (
    <div className={`${className} form-box`} {...props}>
      {children}{' '}
    </div>
  )
}

export default FormBox
