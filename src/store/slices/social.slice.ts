import { generateID } from '@/utils/generateID'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IOption {
  id: string
  title: string
  value: string
  selected: boolean
}

export interface ISocialLink {
  id: string
  link: string
  optionId: string
}

export interface ISocialState {
  options: IOption[]
  links: ISocialLink[]
}

const initialState: ISocialState = {
  links: [],
  options: [
    {
      id: generateID(),
      title: 'GitHub',
      value: 'github',
      selected: false,
    },
    {
      id: generateID(),
      title: 'Youtube',
      value: 'youtube',
      selected: false,
    },
    {
      id: generateID(),
      title: 'LinkedIn',
      value: 'linkedin',
      selected: false,
    },
  ],
}

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    selectSocial(state, action: PayloadAction<{ id: string }>) {
      state.options = state.options.map(option => {
        if (option.id === action.payload.id) {
          return { ...option, selected: true }
        }

        return { ...option, selected: false }
      })
    },

    addSocial(state) {
      if (state.links.length >= state.options.length) return

      state.links.push
    },
  },
})

export type SocialActionsType = typeof socialSlice.actions
export const { reducer: socialReducer, actions: socialActions } = socialSlice
