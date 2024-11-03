import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import Button from '@/components/ui/buttons/Button/Button'
import SocialItem from '@/components/widgets/cards/SocialItem/SocialItem'
import { DICTIONARY } from '@/dictionaries'
import type { FC } from 'react'

interface PropsType {}

const ProfileFormLinks: FC<PropsType> = () => {
  const handleSave = () => {}

  return (
    <ProfileFormWrapper
      title={DICTIONARY['en'].customize_your_links}
      text={DICTIONARY['en'].add_edit_remove_links}
      handleSave={handleSave}
      button={
        <Button variant='outlined' isFullWidth>
          &#43; {DICTIONARY['en'].add_new_link}
        </Button>
      }
    >
      <SocialItem title='link 1' />
      <SocialItem title='link 1' />
      <SocialItem title='link 1' />
      <SocialItem title='link 1' />
      <SocialItem title='link 1' />
    </ProfileFormWrapper>
  )
}

export default ProfileFormLinks
