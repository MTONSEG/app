import Button from '@/components/ui/buttons/Button/Button'
import Header from '@/components/widgets/layout/Header/Header'
import EditorIcon from '@icons/settings.svg?react'
import ShareIcon from '@icons/share.svg?react'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsType {}

const PreviewHeader: FC<PropsType> = () => {
  const navigate = useNavigate()

  return (
    <Header>
      <Button variant='outlined' iconType='mobile-view' onClick={() => navigate('/profile')}>
        <EditorIcon />
        <span>Back to Editor</span>
      </Button>

      <Button iconType='mobile-view'>
        <ShareIcon />
        <span>Share Link</span>
      </Button>
    </Header>
  )
}

export default PreviewHeader
