import FormBox from '@/components/ui/forms/FormBox/FormBox'
import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import Select from '@/components/ui/forms/Select/Select'
import { DICTIONARY } from '@/dictionaries'
import { useSocialIcons } from '@/hooks/common/useSocialIcons'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import LinkIcon from '@icons/link.svg?react'
import type { FC } from 'react'
import './SocialItem.scss'

interface PropsType {
  title: string
}

const SocialItem: FC<PropsType> = ({ title }) => {
  const options = useAppSelector(state => state.social.options)
  const { socialIconMap } = useSocialIcons()
  const { selectSocial } = useActions('social')

  const handleOptionClick = (id: string) => {
    selectSocial({ id })
  }

  return (
    <FormBox className='social-item'>
      <div className='social-item__head'>
        <p className='social-item__title'>
          <button type='button' className='social-item__drag-btn' />
          <span>{title}</span>
        </p>

        <button className='social-item__btn'>{DICTIONARY['en'].remove}</button>
      </div>

      <FormWrapper title='Link'>
        <Select options={options} icons={socialIconMap} onSelectOption={handleOptionClick} />
      </FormWrapper>

      <FormWrapper title='Link' icon={<LinkIcon />}>
        <Input />
      </FormWrapper>
    </FormBox>
  )
}

export default SocialItem
