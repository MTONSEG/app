import type { FC } from 'react'
import './Skeleton.scss'

interface PropsType {
  width: string
  height: string
}

const Skeleton: FC<PropsType> = ({ width, height }) => {
  return <div className='skeleton' style={{ width: width, height: height }} />
}

export default Skeleton
