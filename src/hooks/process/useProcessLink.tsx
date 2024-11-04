import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { IOption } from '@/store/slices/user.types'
import { FormEvent } from 'react'

export const useProcessLink = () => {
  const links = useAppSelector(state => state.user.links)
  const options = useAppSelector(state => state.user.options)

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
