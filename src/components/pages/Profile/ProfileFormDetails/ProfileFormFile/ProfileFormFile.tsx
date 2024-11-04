import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import InputFile from '@/components/ui/forms/InputFile/InputFile'
import { DICTIONARY } from '@/dictionaries'
import { useProcessAddFile } from '@/hooks/process/useProcessAddFile'

const ProfileFormFile = () => {
  const { photo, handleChange } = useProcessAddFile()

  return (
    <FormBox>
      <FormWrapper title='Profile picture' variant='grid'>
        <InputFile
          name='photo'
          text={photo.name ? photo.name : DICTIONARY['en'].image_requirements}
          imageSrc={photo.src}
          onChange={handleChange}
          accept='.png, .jpeg, .jpg'
        />
      </FormWrapper>
    </FormBox>
  )
}

export default ProfileFormFile
