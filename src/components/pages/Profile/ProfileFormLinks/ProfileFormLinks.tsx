import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import Button from '@/components/ui/buttons/Button/Button'
import SocialItem from '@/components/widgets/cards/SocialItem/SocialItem'
import { DICTIONARY } from '@/dictionaries'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { IOption } from '@/store/slices/user.types'
import type { FC, FormEvent } from 'react'

interface PropsType {}

const ProfileFormLinks: FC<PropsType> = () => {
  const links = useAppSelector(state => state.user.links)
  const options = useAppSelector(state => state.user.options)

  const { addLink, removeLink, setSocial, setLinkValue } = useActions('user')

  const handleAddLink = () => {
    addLink()
  }

  const handleRemove = (id: string) => {
    removeLink({ id })
  }

  const handelSelectSocial = (id: string, option: IOption | null) => {
    setSocial({ id, option })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChangeUrl = (id: string, value: string) => {
    setLinkValue({ id, value })
  }


  return (
    <ProfileFormWrapper
      title={DICTIONARY['en'].customize_your_links}
      text={DICTIONARY['en'].add_edit_remove_links}
      onSubmit={handleSubmit}
      button={
        <Button type='button' variant='outlined' isFullWidth onClick={handleAddLink} disabled={links.length > 4}>
          &#43; {DICTIONARY['en'].add_new_link}
        </Button>
      }
    >
      {links?.map((link, index) => (
        <SocialItem
          key={link.id}
          options={options}
          id={link.id}
          optionId={link.option?.id}
          title={`Link #${index + 1}`}
          url={link.url}
          onRemove={handleRemove}
          onChangeUrl={handleChangeUrl}
          onSocialSelect={handelSelectSocial}
        />
      ))}
    </ProfileFormWrapper>
  )
}

export default ProfileFormLinks
