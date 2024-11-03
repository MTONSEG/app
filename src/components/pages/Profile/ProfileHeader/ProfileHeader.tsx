import LinkContainer from '@/components/containers/LinkContainer/LinkContainer'
import Button from '@/components/ui/buttons/Button/Button'
import Logo from '@/components/ui/common/Logo/Logo'
import Header from '@/components/widgets/layout/Header/Header'
import { DICTIONARY } from '@/dictionaries'
import EyeIcon from '@icons/eye.svg?react'
import LinkIcon from '@icons/link.svg?react'
import ProfileIcon from '@icons/profile.svg?react'
import { useNavigate } from 'react-router-dom'

const ProfileHeader = () => {
  const navigate = useNavigate()

  const links = [
    { to: '/profile', icon: <LinkIcon />, label: 'Links' },
    { to: '/profile/details', icon: <ProfileIcon />, label: 'Profile Details' },
  ]

  return (
    <Header>
      <Logo />

      <LinkContainer links={links} />

      <Button iconType='mobile-view' variant='outlined' onClick={() => navigate('/')}>
        <EyeIcon /> <span>{DICTIONARY['en'].preview}</span>
      </Button>
    </Header>
  )
}

export default ProfileHeader
