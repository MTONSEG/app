import SocialContainer from '@/components/containers/SocialContainer/SocialContainer'
import UserInfoContainer from '@/components/containers/UserInfoContainer/UserInfoContainer'
import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import Skeleton from '@/components/ui/common/Skeleton/Skeleton'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import PhonePreview from '@/components/widgets/cards/PhonePreview/PhonePreview'
import { useSocialIcons } from '@/hooks/common/useSocialIcons'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { getFullName } from '@/utils/getFullName'
import { useEffect, useState } from 'react'

const ProfilePreview = () => {
  const links = useAppSelector(state => state.user.links)
  const photo = useAppSelector(state => state.user.photo)
  const firstName = useAppSelector(state => state.user.firstName)
  const lastName = useAppSelector(state => state.user.lastName)
  const email = useAppSelector(state => state.user.email)

  const [skeletonList, setSkeletonList] = useState<null[]>([])
  const { socialIconMap } = useSocialIcons()

  useEffect(() => {
    const counter = links.reduce((acc, link) => acc + (link.option ? 1 : 0), 0)
    const fakeList: null[] = new Array(3 - counter).fill(null)

    setSkeletonList([...fakeList])
  }, [links])

  return (
    <div className='profile-preview' style={{ flexDirection: 'column' }}>
      <PhonePreview>
        <UserInfoContainer>
          <Avatar imageSrc={photo.src} />
          <UserInfo name={getFullName({ firstName, lastName })} email={email} />
        </UserInfoContainer>

        <SocialContainer>
          {links?.map(link => {
            if (link.option)
              return (
                <SocialButton
                  key={link.id}
                  icon={socialIconMap[link.option.value]?.icon}
                  variant={link.option?.value}
                  isArrow
                  isFullWidth
                >
                  {link.option?.title}
                </SocialButton>
              )
          })}

          {skeletonList.map((_, index) => (
            <Skeleton width='100%' height='40px' key={index} />
          ))}
        </SocialContainer>
      </PhonePreview>
    </div>
  )
}

export default ProfilePreview
