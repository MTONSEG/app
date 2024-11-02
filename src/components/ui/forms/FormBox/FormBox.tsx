import type { FC, ReactNode } from 'react'
import './FormBox.scss'

interface PropsType {
  children?: ReactNode
}

const FormBox: FC<PropsType> = ({ children }) => {
  return <div className='form-box'>{children} </div>
}

export default FormBox
