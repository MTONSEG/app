import Skeleton from '@/components/ui/common/Skeleton/Skeleton'
import type { FC } from 'react'
import './UserInfo.scss'

interface PropsType {
  name?: string
  email?: string
  size?: 'md' | 'xs'
}

const UserInfo: FC<PropsType> = ({ name, email, size = 'xs' }) => {
  return (
    <div className={`user-info user-info--${size} `}>
      {!!name ? <p className='user-info__name'>{name}</p> : <Skeleton width='130px' height='15px' />}

      {!!email ? <p className='user-info__email'>{email}</p> : <Skeleton width='100px' height='9px' />}
    </div>
  )
}

export default UserInfo
