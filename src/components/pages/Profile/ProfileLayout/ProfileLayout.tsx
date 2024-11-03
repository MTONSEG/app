import ProfileHeader from '@/components/pages/Profile/ProfileHeader/ProfileHeader'
import { useVhFix } from '@/hooks/common/useVhFix'
import type { FC, ReactNode } from 'react'
import '../Profile.scss'

interface PropsType {
  children: ReactNode
}

const ProfileLayout: FC<PropsType> = ({ children }) => {
  useVhFix()

  return (
    <div className='profile-layout' style={{ height: 'calc(100 * var(--vh)' }}>
      <ProfileHeader />

      {children}
    </div>
  )
}

export default ProfileLayout
