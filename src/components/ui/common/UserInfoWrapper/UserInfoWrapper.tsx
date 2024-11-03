import { FC, ReactNode } from 'react'
import './UserInfoWrapper.scss'

interface PropsType {
  children?: ReactNode
}

const UserInfoWrapper: FC<PropsType> = ({ children }) => {
  return <div className='user-info-wrapper'>{children}</div>
}

export default UserInfoWrapper
