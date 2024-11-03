import type { FC, ReactNode } from 'react'

import './UserInfoContainer.scss'

interface PropsType {
  children?: ReactNode
  className?: string
}

const UserInfoContainer: FC<PropsType> = ({ children }) => <div className='user-info-container'>{children}</div>

export default UserInfoContainer
