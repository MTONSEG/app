import { ILinkOption, ISocialLink, IUserState } from '@/store/slices/user.types'
import { generateID } from '@/utils/generateID'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IUserState = {
  links: [],
  options: [
    {
      id: generateID(),
      title: 'GitHub',
      value: 'github',
    },
    {
      id: generateID(),
      title: 'Youtube',
      value: 'youtube',
    },
    {
      id: generateID(),
      title: 'LinkedIn',
      value: 'linkedin',
    },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addLink(state) {
      const newSocialLink: ISocialLink = {
        id: generateID(),
        url: '',
        option: null,
      }

      state.links.push(newSocialLink)
    },
    removeLink(state, action: PayloadAction<{ id: string }>) {
      state.links = state.links.filter(link => link.id !== action.payload.id)
    },
    setSocial(state, action: PayloadAction<ILinkOption>) {
      const { id, option } = action.payload

      state.links = state.links.map(link => {
        if (link.id === id) {
          return { ...link, option }
        }

        return link
      })
    },
    setLinkValue(state, action: PayloadAction<{ id: string; value: string }>) {
      const { id, value } = action.payload

      state.links.forEach(link => {
        if (link.id === id) {
          link.url = value
        }
      })
    },
  },
})

export type UserActionsType = typeof userSlice.actions
export const { reducer: userReducer, actions: userActions } = userSlice
