import Button from '@/components/ui/buttons/Button'
import SocialItem from '@/components/widgets/cards/SocialItem/SocialItem'
import ProfileFormWrapper from '@/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import { FC } from 'react'

interface PropsType {}

const ProfileFormLinks: FC<PropsType> = () => {

  const handleSave = () => {}

  return (
    <ProfileFormWrapper
      title='Customize your links'
      text='Add/edit/remove links bellow and then all your profiles with the world'
      handleSave={handleSave}
      button={
        <Button variant='outlined' isFullWidth>
          Add new link
        </Button>
      }
    >
      <SocialItem title='link 1' />

     
    </ProfileFormWrapper>
  )
}

export default ProfileFormLinks
