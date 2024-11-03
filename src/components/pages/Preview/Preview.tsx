import { FC } from 'react'
import './Preview.scss'
import Header from '@/components/widgets/layout/Header/Header'

interface PropsType {}

const Preview: FC<PropsType> = () => {
  return (
    <div className='preview'>
      <Header />
    </div>
  )
}

export default Preview
