import { IOption } from '@/store/slices/social.slice'
import { FC, useEffect, useState } from 'react'
import './Select.scss'
import SelectOption from '@/components/ui/forms/Select/SelectOption/SelectOption'
import { getActive } from '@/utils/getActive'

interface PropsType {
  options: IOption[]
  onSelectOption: (id: string) => void
}

const Select: FC<PropsType> = ({ options, onSelectOption }) => {
  const [currentOption, setCurrentOption] = useState<IOption | null>(null)
  const [isActive, setActive] = useState<boolean>(false)

  const handleOptionClick = (id: string) => {
    const option = options.find(el => el.id === id)

    onSelectOption(id)
    setCurrentOption(option ? option : null)
    setActive(false)
  }

  const handleOpen = () => {
    setActive(prev => !prev)
  }

  useEffect(() => {}, [options])

  return (
    <div className={`select ${getActive(isActive)}`}>
      <div className='select__head' onClick={handleOpen}>
        {currentOption ? currentOption.title : 'No select'}
      </div>

      <ul className='select__options'>
        {options.map(option => (
          <SelectOption
            key={option.id}
            title={option.title}
            isSelect={option.selected}
            onClick={() => handleOptionClick(option.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Select
