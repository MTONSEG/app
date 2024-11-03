import type { FC, ReactNode } from 'react'
import './PreviewCard.scss'

interface PropsType {
  className?: string
  children?: ReactNode
}

const PreviewCard: FC<PropsType> = ({ className = '', children }) => {
  return <div className={`${className} preview-card`}>{children}</div>
}

export default PreviewCard
