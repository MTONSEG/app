import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tent: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export type UserActionsType = typeof userSlice.actions
export const { reducer: userReducer, actions: userActions } = userSlice
