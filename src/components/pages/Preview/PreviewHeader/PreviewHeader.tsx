import Button from '@/components/ui/buttons/Button/Button'
import Header from '@/components/widgets/layout/Header/Header'
import { DICTIONARY } from '@/dictionaries'
import EditorIcon from '@icons/settings.svg?react'
import ShareIcon from '@icons/share.svg?react'
import { useNavigate } from 'react-router-dom'



const PreviewHeader = () => {
  const navigate = useNavigate()

  return (
    <Header>
      <Button variant='outlined' iconType='mobile-view' onClick={() => navigate('/profile')}>
        <EditorIcon />
        <span>{DICTIONARY['en'].back_to_editor}</span>
      </Button>

      <Button iconType='mobile-view'>
        <ShareIcon />
        <span>{DICTIONARY['en'].share_link}</span>
      </Button>
    </Header>
  )
}

export default PreviewHeader
