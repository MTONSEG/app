import SocialContainer from '@/components/containers/SocialContainer/SocialContainer'
import UserInfoContainer from '@/components/containers/UserInfoContainer/UserInfoContainer'
import SocialButton from '@/components/ui/buttons/SocialButton/SocialButton'
import Avatar from '@/components/ui/common/Avatar/Avatar'
import Skeleton from '@/components/ui/common/Skeleton/Skeleton'
import UserInfo from '@/components/ui/common/UserInfo/UserInfo'
import PhonePreview from '@/components/widgets/cards/PhonePreview/PhonePreview'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import GithubIcon from '@icons/github.svg?react'
import { useEffect, useState } from 'react'

const ProfilePreview = () => {
  const links = useAppSelector(state => state.user.links)
  const [skeletonList, setSkeletonList] = useState<null[]>([])

  useEffect(() => {
    const counter = links.reduce((acc, link) => acc + (link.option ? 1 : 0), 0)
    const fakeList: null[] = new Array(5 - counter).fill(null)

    setSkeletonList([...fakeList])
  }, [links])

  return (
    <div className='profile-preview' style={{ flexDirection: 'column' }}>
      <PhonePreview>
        <UserInfoContainer>
          <Avatar imageSrc='https://picsum.photos/200/300' />
          <UserInfo name='Max Puzanov' email='test@gmail.com' />
        </UserInfoContainer>

        <SocialContainer>
          {links?.map(link => {
            if (link.option)
              return (
                <SocialButton variant='github' icon={<GithubIcon />} isArrow isFullWidth>
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
