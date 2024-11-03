import { getActive } from '@/utils/getActive'
import { FC } from 'react'
import './Avatar.scss'

interface PropsType {
  className?: string
  imageSrc?: string
  size?: 'md' | 'xs'
  isPlaceholder?: boolean
}

const Avatar: FC<PropsType> = ({ imageSrc, size = 'xs', className = '', isPlaceholder }) => {
  const classes = `${className} avatar ${getActive(!!imageSrc)} avatar--${size} ${isPlaceholder ? 'user-info--with-placeholder' : ''}`

  return (
    <div className={classes}>
      {!!imageSrc && (
        <div className='avatar__border'>
          <img width={150} height={150} src={imageSrc} alt='avatar' />
        </div>
      )}
    </div>
  )
}

export default Avatar
