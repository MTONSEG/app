import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import GithubIcon from '@icons/github.svg?react'
import PhoneIcon from '@icons/iphone2.svg?react'
import type { FC } from 'react'
import './PreviewUserInfo.scss'

interface PropsType {
  variant?: 'phone' | 'card'
}

const PreviewUserInfo: FC<PropsType> = ({ variant = 'phone' }) => {
  return (
    <div className={`preview-user-info preview-user-info--${variant}`}>
      <div className='preview-user-info__body'>
        <div className='preview-user-info__user-info'>
          <Avatar size={variant === 'phone' ? 'xs' : 'md'} imageSrc='https://picsum.photos/200/300' />
          <UserInfo size={variant === 'phone' ? 'xs' : 'md'} name='Max Puzanov' email='test@gmail.com' />
        </div>

        <div className='preview-user-info__social-wrap'>
          <SocialButton
            variant='github'
            size={variant === 'phone' ? 'xs' : 'md'}
            icon={<GithubIcon />}
            isArrow
            isFullWidth
          >
            Github
          </SocialButton>

          <SocialButton
            variant='youtube'
            size={variant === 'phone' ? 'xs' : 'md'}
            icon={<GithubIcon />}
            isArrow
            isFullWidth
          >
            Github
          </SocialButton>

          <SocialButton
            variant='linkedin'
            size={variant === 'phone' ? 'xs' : 'md'}
            icon={<GithubIcon />}
            isArrow
            isFullWidth
          >
            Github
          </SocialButton>
        </div>
      </div>

      {variant === 'phone' && (
        <div className='preview-user-info__phone-svg'>
          <PhoneIcon />
        </div>
      )}
    </div>
  )
}

export default PreviewUserInfo
