import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import PhoneIcon from '@icons/iphone2.svg?react'
import GithubIcon from '@icons/github.svg?react'

const ProfilePreview = () => {
  return (
    <div className='profile-preview' style={{ flexDirection: 'column' }}>
      <div className='profile-preview__icon-wrap'>
        <PhoneIcon />
      </div>

      <SocialButton variant='github' icon={<GithubIcon />} isArrow isFullWidth>
        Github
      </SocialButton>

      <SocialButton variant='youtube' icon={<GithubIcon />} isArrow isFullWidth>
        Github
      </SocialButton>

      <SocialButton variant='linkedin' icon={<GithubIcon />} isArrow isFullWidth>
        Github
      </SocialButton>
    </div>
  )
}

export default ProfilePreview
