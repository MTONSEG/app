import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import './Heading.scss'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  className?: string
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  children?: ReactNode
}

const Heading: FC<PropsType> = ({ className = '', children = '', component = 'h1', weight = 'normal', ...props }) => {
  const Tag = component

  return (
    <Tag className={`${className} heading heading--${weight}`} {...props}>
      {children}
    </Tag>
  )
}

export default Heading
