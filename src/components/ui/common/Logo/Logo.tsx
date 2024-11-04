import LogoIcon from '@icons/link-gorisontal.svg?react'
import './Logo.scss'

const Logo = () => {
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
