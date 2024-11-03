import type { FC, ReactNode } from 'react'

import './SocialContainer.scss'

interface PropsType {
  children?: ReactNode
  className?: string
}

const SocialContainer: FC<PropsType> = ({ children }) => <div className='social-container'>{children}</div>

export default SocialContainer
