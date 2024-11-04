import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import './Button.scss'

interface PropsType
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  variant?: 'contained' | 'outlined'
  iconType?: 'default' | 'mobile-view'
  isFullWidth?: boolean
}

const Button: FC<PropsType> = ({
  children,
  className = '',
  color = 'violet',
  variant = 'contained',
  iconType = 'default',
  isFullWidth,
  ...props
}) => {
  const classes = `${className} button button--${variant} button--${iconType} ${isFullWidth ? 'button--full-width' : ''} `

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
