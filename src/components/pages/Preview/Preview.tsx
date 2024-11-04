import SocialContainer from '@/components/containers/SocialContainer/SocialContainer'
import UserInfoContainer from '@/components/containers/UserInfoContainer/UserInfoContainer'
import PreviewHeader from '@/components/pages/Preview/PreviewHeader/PreviewHeader'
import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import PreviewCard from '@/components/widgets/cards/PreviewCard/PreviewCard'
import { useSocialIcons } from '@/hooks/common/useSocialIcons'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { getFullName } from '@/utils/getFullName'
import type { FC } from 'react'
import './Preview.scss'

interface PropsType {}

const Preview: FC<PropsType> = () => {
  const { links, photo, firstName, lastName, email } = useAppSelector(state => state.user)
  const { socialIconMap } = useSocialIcons()

  return (
    <div className='preview'>
      <PreviewHeader />

      <main className='preview__hero'>
        <PreviewCard className='preview__card'>
          <UserInfoContainer>
            <Avatar size='md' imageSrc={photo.src} />
            <UserInfo size='md' name={getFullName({ firstName, lastName })} email={email} />
          </UserInfoContainer>

          <SocialContainer>
            {links?.map(
              link =>
                !!link.option && (
                  <SocialButton
                    key={link.id}
                    size='md'
                    variant={link.option.value}
                    icon={socialIconMap[link.option.value]?.icon}
                    isArrow
                    isFullWidth
                  >
                    {link.option?.title}
                  </SocialButton>
                )
            )}
          </SocialContainer>
        </PreviewCard>
      </main>
    </div>
  )
}

export default Preview
