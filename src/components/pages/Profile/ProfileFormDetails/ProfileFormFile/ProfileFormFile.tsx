import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import InputFile from '@/components/ui/forms/InputFile/InputFile'
import { ChangeEvent, FC, useState } from 'react'

interface PropsType {}

const ProfileFormFile: FC<PropsType> = () => {
  const [fileSrc, setFileSrc] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files

    if (!files || !files[0]) {
      setFileSrc('')
      return
    }

    const file = files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (eventReader: ProgressEvent<FileReader>) => {
      if (!eventReader.target) return

      const fileContent = eventReader.target.result

      if (typeof fileContent === 'string') {
        setFileSrc(fileContent)
      }
    }
  }

  return (
    <FormBox>
      <FormWrapper title='Profile picture' variant='flex'>
        <InputFile
          name='photo'
          text='Image must be below 1024x1024px. Use PNG, JPG, or BMP format'
          imageSrc={fileSrc}
          onChange={handleChange}
          accept='.png, .jpeg, .jpg'
        />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFile
