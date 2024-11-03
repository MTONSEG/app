import { FC, ReactNode } from 'react'
import '../Select.scss'

interface PropsType {
  isSelect?: boolean
  children?: ReactNode
  onClick?: () => void
}

const SelectOption: FC<PropsType> = ({ children, isSelect, onClick }) => {
  return (
    <li className={`select-option ${isSelect ? 'is-select' : ''}`} onClick={onClick}>
      {children}
    </li>
  )
}

export default SelectOption
