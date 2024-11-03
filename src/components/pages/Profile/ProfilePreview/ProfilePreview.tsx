import SocialContainer from '@/components/containers/SocialContainer/SocialContainer'
import UserInfoContainer from '@/components/containers/UserInfoContainer/UserInfoContainer'
import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import Skeleton from '@/components/ui/common/Skeleton/Skeleton'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import PhonePreview from '@/components/widgets/cards/PhonePreview/PhonePreview'
import GithubIcon from '@icons/github.svg?react'

const ProfilePreview = () => {
  return (
    <div className='profile-preview' style={{ flexDirection: 'column' }}>
      <PhonePreview>
        <UserInfoContainer>
          <Avatar imageSrc='https://picsum.photos/200/300' />
          <UserInfo name='Max Puzanov' email='test@gmail.com' />
        </UserInfoContainer>

        <SocialContainer>
          <SocialButton variant='github' icon={<GithubIcon />} isArrow isFullWidth>
            Github
          </SocialButton>

          <SocialButton variant='youtube' icon={<GithubIcon />} isArrow isFullWidth>
            Github
          </SocialButton>

          <SocialButton variant='linkedin' icon={<GithubIcon />} isArrow isFullWidth>
            Github
          </SocialButton>

          <Skeleton width='100%' height='40px' />

          <Skeleton width='100%' height='40px' />
        </SocialContainer>
      </PhonePreview>
    </div>
  )
}

export default ProfilePreview
