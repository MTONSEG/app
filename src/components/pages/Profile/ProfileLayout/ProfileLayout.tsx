import Header from '@/components/widgets/layout/Header/Header'
import { useVhFix } from '@/hooks/common/useVhFix'
import { FC, ReactNode } from 'react'
import './ProfileLayout.scss'

interface PropsType {
  children: ReactNode
}

const ProfileLayout: FC<PropsType> = ({ children }) => {
  useVhFix()

  return (
    <div className='profile-layout' style={{ height: 'calc(100 * var(--vh)' }}>
      <Header />
      {children}
    </div>
  )
}

export default ProfileLayout
