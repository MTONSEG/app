import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import InputFile from '@/components/ui/forms/InputFile/InputFile'
import { useState, type ChangeEvent, FC } from 'react'

interface PropsType {}

type FileDataType = Record<'name' | 'src', string>

const ProfileFormFile: FC<PropsType> = () => {
  const [file, setFile] = useState<FileDataType>({
    name: 'Image must be below 1024x1024px. Use PNG, JPG, or BMP format',
    src: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files

    if (!files || !files[0]) {
      setFile({ name: '', src: '' })
      return
    }

    const file = files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (eventReader: ProgressEvent<FileReader>) => {
      if (!eventReader.target) return

      const fileContent = eventReader.target.result

      if (typeof fileContent === 'string') {
        setFile(() => ({ name: file.name, src: fileContent }))
      }
    }
  }

  return (
    <FormBox>
      <FormWrapper title='Profile picture' variant='grid'>
        <InputFile
          name='photo'
          text={file.name ? file.name : 'Image must be below 1024x1024px. Use PNG, JPG, or BMP format'}
          imageSrc={file.src}
          onChange={handleChange}
          accept='.png, .jpeg, .jpg'
        />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFile
