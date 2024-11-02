import FormWrapper from '@/components/ui/forms/FormWrapper/FormWrapper'
import Input from '@/components/ui/forms/Input/Input'
import Select from '@/components/ui/forms/Select/Select'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { FC } from 'react'
import './SocialItem.scss'

interface PropsType {
  title: string
}

const SocialItem: FC<PropsType> = () => {
  const options = useAppSelector(state => state.social.options)

  const { selectSocial } = useActions('social')

  const handleOptionClick = (id: string) => {
    selectSocial({ id })
  }

  return (
    <div className='social-item'>
      <div className='social-item__head'>
        <p className='social-item__title'>Link #1</p>

        <button className='social-item__btn'>Remove</button>
      </div>

      <FormWrapper title='Link'>
        <Select options={options} onSelectOption={handleOptionClick} />
      </FormWrapper>

      <FormWrapper title='Link'>
        <Input />
      </FormWrapper>
    </div>
  )
}

export default SocialItem
