import PhoneIcon from '@icons/iphone2.svg?react'
import type { FC, ReactNode } from 'react'
import './PhonePreview.scss'

interface PropsType {
  children: ReactNode
}

const PhonePreview: FC<PropsType> = ({ children }) => {
  return (
    <div className='phone-preview'>
      <div className='phone-preview__body'>{children}</div>

      <div className='phone-preview__phone-svg'>
        <PhoneIcon />
      </div>
    </div>
  )
}

export default PhonePreview
