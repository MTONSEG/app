import SelectOption from '@/components/ui/forms/Select/SelectOption/SelectOption'
import useClickOutside from '@/hooks/common/useClickOutside'
import { getActive } from '@/utils/getActive'
import { KeyboardEvent, ReactNode, useState, type FC } from 'react'
import './Select.scss'
import { IOption } from '@/store/slices/user.types'
import { SocialIconType } from '@/types/common.types'

interface PropsType {
  selectedId?: string
  options: IOption[]
  icons?: SocialIconType
  onSelectOption: (option: IOption | null) => void
}

const Select: FC<PropsType> = ({ selectedId, options, icons, onSelectOption }) => {
  const [currentOption, setCurrentOption] = useState<IOption | null>(null)
  const { ref, isShow, setIsShow } = useClickOutside<HTMLDivElement>(false)

  const handleOptionClick = (id: string) => {
    const option = options.find(el => el.id === id) || null

    setCurrentOption(option)
    onSelectOption(option)
    setIsShow(false)
  }

  const handleOpen = () => {
    setIsShow(prev => !prev)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleOpen()
  }

  const getIcon = (key: string): ReactNode | null =>
    icons && icons[key].icon ? icons[key].icon : null

  return (
    <div ref={ref} className={`select ${getActive(isShow)}`}>
      <div className='select__head' onClick={handleOpen} tabIndex={0} onKeyDown={handleKeyDown}>
        {currentOption ? (
          <>
            {getIcon(currentOption.value)}
            <span>{currentOption.title}</span>
          </>
        ) : (
          'No select'
        )}
      </div>

      <ul className='select__options'>
        {options.map(option => (
          <SelectOption
            key={option.id}
            isSelect={option.id === selectedId}
            onClick={() => handleOptionClick(option.id)}
          >
            {getIcon(option.value)}
            <span>{option.title}</span>
          </SelectOption>
        ))}
      </ul>
    </div>
  )
}

export default Select
