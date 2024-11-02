import { FC } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import Button from '@/components/ui/buttons/Button'

interface PropsType {}

const Header: FC<PropsType> = () => {
  return (
    <header className='header'>
      <div className='header__logo-wrap'>
        <img width={100} height={40} src='https://urgent.in.ua/build/assets/icons/logo-black.svg' alt='urgent' className='header__logo' />
      </div>

      <div className='header__link-wrap'>
        <NavLink to={'/profile'} className='header__link' end>Links</NavLink>
        <NavLink to={'/profile/details'} className='header__link' end>Profile Details</NavLink>
      </div>

      <Button className='header__preview-btn' variant='outlined'>Preview</Button>
    </header>
  )
}

export default Header
