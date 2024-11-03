import ArrowIcon from '@icons/arrow-right.svg?react'
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import './SocialButton.scss'

interface PropsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  variant?: 'github' | 'linkedin' | 'youtube' | 'default'
  size?: 'md' | 'xs'
  icon?: ReactNode
  isFullWidth?: boolean
  isArrow?: boolean
  isSkeleton?: boolean
}

const SocialButton: FC<PropsType> = ({
  children,
  className = '',
  variant = 'default',
  icon,
  size = 'xs',
  isFullWidth,
  isSkeleton,
  isArrow,
  ...props
}) => {
  const classes = `${className} social-btn social-btn--${variant} ${isFullWidth ? 'social-btn--full-width' : ''} ${isArrow ? 'social-btn--with-arrow' : ''} social-btn--${size}`

  return (
    <button className={classes} {...props}>
      <span className='social-btn__body'>
        {!!icon && <span className='social-btn__icon'>{icon}</span>}
        {children}
      </span>

      {isArrow && (
        <span className='social-btn__arrow-icon'>
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}

export default SocialButton
