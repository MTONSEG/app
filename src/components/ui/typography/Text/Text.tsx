import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import './Text.scss'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  className?: string
  component?: 'p' | 'span'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  children?: ReactNode
}

const Text: FC<PropsType> = ({ children, className = '', component = 'span', weight = 'normal', ...props }) => {
  const Tag = component

  return (
    <Tag className={`${className} typography typography--${weight}`} {...props}>
      {children}
    </Tag>
  )
}

export default Text
