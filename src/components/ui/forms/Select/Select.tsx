import SelectOption from '@/components/ui/forms/Select/SelectOption/SelectOption'
import useClickOutside from '@/hooks/common/useClickOutside'
import type { IOption } from '@/store/slices/social.slice'
import { getActive } from '@/utils/getActive'
import { KeyboardEvent, ReactNode, useEffect, useState, type FC } from 'react'
import './Select.scss'

interface PropsType {
  options: IOption[]
  icons?: Record<string, ReactNode>
  onSelectOption: (id: string) => void
}

const Select: FC<PropsType> = ({ options, icons, onSelectOption }) => {
  const [currentOption, setCurrentOption] = useState<IOption | null>(null)
  const { ref, isShow, setIsShow } = useClickOutside<HTMLDivElement>(false)

  const handleOptionClick = (id: string) => {
    const option = options.find(el => el.id === id)

    onSelectOption(id)
    setCurrentOption(option ? option : null)
    setIsShow(false)
  }

  const handleOpen = () => {
    setIsShow(prev => !prev)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') handleOpen()
  }

  const getIcon = (key: string): ReactNode | null => (icons && icons[key] ? icons[key] : null)

  useEffect(() => {}, [options])

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
          <SelectOption key={option.id} isSelect={option.selected} onClick={() => handleOptionClick(option.id)}>
            {getIcon(option.value)}
            <span>{option.title}</span>
          </SelectOption>
        ))}
      </ul>
    </div>
  )
}

export default Select
