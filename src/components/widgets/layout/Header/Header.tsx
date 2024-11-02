import Logo from '@/components/ui/common/Logo/Logo'
import EyeIcon from '@icons/eye.svg?react'
import LinkIcon from '@icons/link.svg?react'
import ProfileIcon from '@icons/profile.svg?react'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

interface PropsType {}

const Header: FC<PropsType> = () => {
  return (
    <header className='header'>
      <Logo />

      <div className='header__link-wrap'>
        <NavLink to={'/profile'} className='header__link' end>
          <LinkIcon /> <span>Links</span>
        </NavLink>

        <NavLink to={'/profile/details'} className='header__link' end>
          <ProfileIcon /> <span>Profile Details</span>
        </NavLink>
      </div>

      <NavLink to={'/'} className='header__link header__link--preview'>
        <EyeIcon /> <span>Preview</span>
      </NavLink>
    </header>
  )
}

export default Header
