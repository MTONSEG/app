import { DICTIONARY } from '@/dictionaries'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { ChangeEvent } from 'react'

export const useProcessAddFile = () => {
  const photo = useAppSelector(state => state.user.photo)

  const { setPhoto } = useActions('user')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files

    if (!files || !files[0]) {
      setPhoto({ name: '', src: '' })
      return
    }

    const file = files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (eventReader: ProgressEvent<FileReader>) => {
      if (!eventReader.target) return

      const fileContent = eventReader.target.result

      if (typeof fileContent === 'string') {
        setPhoto({ name: file.name, src: fileContent })
      }
    }
  }

  return { photo, handleChange }
}
