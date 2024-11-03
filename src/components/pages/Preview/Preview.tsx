import SocialContainer from '@/components/containers/SocialContainer/SocialContainer'
import UserInfoContainer from '@/components/containers/UserInfoContainer/UserInfoContainer'
import PreviewHeader from '@/components/pages/Preview/PreviewHeader/PreviewHeader'
import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import PreviewCard from '@/components/widgets/cards/PreviewCard/PreviewCard'
import GithubIcon from '@icons/github.svg?react'
import type { FC } from 'react'
import './Preview.scss'

interface PropsType {}

const Preview: FC<PropsType> = () => {
  return (
    <div className='preview'>
      <PreviewHeader />

      <main className='preview__hero'>
        <PreviewCard>
          <UserInfoContainer>
            <Avatar size='md' imageSrc='https://picsum.photos/200/300' />
            <UserInfo size='md' name='Max Puzanov' email='test@gmail.com' />
          </UserInfoContainer>

          <SocialContainer>
            <SocialButton size='md' variant='github' icon={<GithubIcon />} isArrow isFullWidth>
              Github
            </SocialButton>

            <SocialButton size='md' variant='youtube' icon={<GithubIcon />} isArrow isFullWidth>
              Github
            </SocialButton>

            <SocialButton size='md' variant='linkedin' icon={<GithubIcon />} isArrow isFullWidth>
              Github
            </SocialButton>
          </SocialContainer>
        </PreviewCard>
      </main>
    </div>
  )
}

export default Preview
