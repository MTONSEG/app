import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import './Button.scss'

interface PropsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  children?: ReactNode
  variant?: 'contained' | 'outlined'
  isFullWidth?: boolean
}

const Button: FC<PropsType> = ({ className = '', color = 'violet', variant = 'contained', isFullWidth, ...props }) => {
  const classes = `${className} button button--${variant} ${isFullWidth ? 'button--full-width' : ''}`

  return <button className={classes} {...props}></button>
}

export default Button
