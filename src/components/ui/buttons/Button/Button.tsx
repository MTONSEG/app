import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import './Button.scss'

interface PropsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  variant?: 'contained' | 'outlined'
  iconType?: 'icon-none' | 'icon-mobile-only' | 'icon-mobile'
  isFullWidth?: boolean
}

const Button: FC<PropsType> = ({
  children,
  className = '',
  color = 'violet',
  variant = 'contained',
  iconType = 'none',
  isFullWidth,
  ...props
}) => {
  const classes = `${className} button button--${variant} ${isFullWidth ? 'button--full-width' : ''} button--${iconType}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button