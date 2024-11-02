import { FC, ReactNode } from 'react'
import '../Select.scss'

interface PropsType {
  title: string
  icon?: ReactNode
  isSelect?: boolean
  onClick?: () => void
}

const SelectOption: FC<PropsType> = ({ title, icon, isSelect, onClick }) => {
  return (
    <li className={`select-option ${isSelect ? 'is-select' : ''}`} onClick={onClick}>
      {!!icon && icon} <span>{title}</span>
    </li>
  )
}

export default SelectOption
