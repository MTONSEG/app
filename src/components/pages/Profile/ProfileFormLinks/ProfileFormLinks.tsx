import ProfileFormWrapper from '@/components/pages/Profile/ProfileFormWrapper/ProfileFormWrapper'
import Button from '@/components/ui/buttons/Button/Button'
import SocialItem from '@/components/widgets/cards/SocialItem/SocialItem'
import { DICTIONARY } from '@/dictionaries'
import { useProcessLink } from '@/hooks/process/useProcessLink'

const ProfileFormLinks = () => {
  const {
    links,
    options,
    handleAddLink,
    handleRemove,
    handelSelectSocial,
    handleSubmit,
    handleChangeUrl,
  } = useProcessLink()

  return (
    <ProfileFormWrapper
      title={DICTIONARY['en'].customize_your_links}
      text={DICTIONARY['en'].add_edit_remove_links}
      onSubmit={handleSubmit}
      button={
        <Button
          type='button'
          variant='outlined'
          isFullWidth
          onClick={handleAddLink}
          disabled={links.length > 4}
        >
          &#43; {DICTIONARY['en'].add_new_link}
        </Button>
      }
    >
      {links?.map((link, index) => (
        <SocialItem
          key={link.id}
          id={link.id}
          optionId={link.option?.id}
          title={`Link #${index + 1}`}
          url={link.url}
          options={options}
          onRemove={handleRemove}
          onChangeUrl={handleChangeUrl}
          onSocialSelect={handelSelectSocial}
        />
      ))}
    </ProfileFormWrapper>
  )
}

export default ProfileFormLinks
