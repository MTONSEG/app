import LogoIcon from '@icons/link-gorisontal.svg?react'
import { FC } from 'react'
import './Logo.scss'

interface PropsType {}

const Logo: FC<PropsType> = () => {
  return (
    <div className='logo'>
      <div className='logo__icon-wrap'>
        <LogoIcon />
      </div>

      <span className='logo__text'>devlinks</span>
    </div>
  )
}

export default Logo
