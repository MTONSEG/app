import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import Select from '@/components/ui/forms/Select/Select'
import { DICTIONARY } from '@/dictionaries'
import { useSocialIcons } from '@/hooks/common/useSocialIcons'
import { IOption } from '@/store/slices/userSlice/user.types'
import LinkIcon from '@icons/link.svg?react'
import type { FC } from 'react'
import './SocialItem.scss'

interface PropsType {
  id: string
  optionId: string | undefined
  title: string
  url: string
  options: IOption[]
  onChangeUrl: (id: string, value: string) => void
  onRemove: (id: string) => void
  onSocialSelect: (id: string, option: IOption | null) => void
}

const SocialItem: FC<PropsType> = ({
  id,
  optionId,
  title,
  url,
  options,
  onChangeUrl,
  onRemove,
  onSocialSelect,
}) => {
  const { socialIconMap } = useSocialIcons()

  const handelSelectSocial = (option: IOption | null) => {
    onSocialSelect(id, option)
  }

  return (
    <FormBox className='social-item'>
      <div className='social-item__head'>
        <p className='social-item__title'>
          <button type='button' className='social-item__drag-btn' />
          <span>{title}</span>
        </p>

        <button type='button' className='social-item__btn' onClick={() => onRemove(id)}>
          {DICTIONARY['en'].remove}
        </button>
      </div>

      <FormWrapper title='Link'>
        <Select
          selectedId={optionId}
          options={options}
          icons={socialIconMap}
          onSelectOption={handelSelectSocial}
        />
      </FormWrapper>

      <FormWrapper title='Link' icon={<LinkIcon />}>
        <Input
          type='text'
          value={url}
          onChange={e => onChangeUrl(id, e.currentTarget.value)}
          aria-label='url social'
        />
      </FormWrapper>
    </FormBox>
  )
}

export default SocialItem
