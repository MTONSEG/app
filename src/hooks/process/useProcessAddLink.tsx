import { DICTIONARY } from '@/dictionaries'
import useToast from '@/hooks/common/useToast'
import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { IOption } from '@/store/slices/userSlice/user.types'
import { FormEvent } from 'react'

export const useProcessAddLink = () => {
  const links = useAppSelector(state => state.user.links)
  const options = useAppSelector(state => state.user.options)
  const showToast = useToast()

  const { addLink, removeLink, setSocial, setLinkValue } = useActions('user')

  const handleAddLink = () => {
    addLink()
  }

  const handleRemove = (id: string) => {
    removeLink({ id })
  }

  const handelSelectSocial = (id: string, option: IOption | null) => {
    setSocial({ id, option })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    showToast(DICTIONARY['en'].your_changes_successfully, 'success')
  }

  const handleChangeUrl = (id: string, value: string) => {
    setLinkValue({ id, value })
  }

  return {
    links,
    options,
    handleAddLink,
    handleRemove,
    handelSelectSocial,
    handleSubmit,
    handleChangeUrl,
  }
}
