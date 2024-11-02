import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import './InputFile.scss'
import PlaceholderIcon from '@icons/placeholder-image.svg?react'

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
interface PropsType extends Omit<InputPropsType, 'type'> {
  text?: string
  imageSrc?: string
}

const InputFile: FC<PropsType> = ({ text, imageSrc, className = '', ...props }) => {
  const inputText: string = !imageSrc ? 'Upload Image' : 'Change Image'

  return (
    <label className={`${className} input-file`}>
      <input className='input-file__input' type={'file'} {...props} />

      <span className={`input-file__custom`}>
        <span className='input-file__placeholder'>
          <PlaceholderIcon />
          {inputText}
        </span>

        {!!imageSrc && <img width={100} height={100} className='input-file__image' src={imageSrc} alt='loaded image' />}
      </span>
      <span className='input-file__text'>{text}</span>
    </label>
  )
}

export default InputFile
