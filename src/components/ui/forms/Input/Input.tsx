import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import './Input.scss'

interface PropsType
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isError?: boolean
  isDisable?: boolean
  className?: string
}

const Input: FC<PropsType> = ({ className, isError, isDisable, ...props }) => {
  return (
    <input
      className={`input ${isDisable ? 'is-disable' : ''} ${isError ? 'is-error' : ''}`}
      {...props}
    />
  )
}

export default Input
