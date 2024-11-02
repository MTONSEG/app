import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import './Input.scss'

interface PropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string
}

const Input: FC<PropsType> = ({ className, ...props }) => {
  return <input className='input' {...props} />
}

export default Input
