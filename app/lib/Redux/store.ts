import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userdata'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
// ...

export const store = configureStore({
  reducer: {
    userSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector : TypedUseSelectorHook<RootState>=useSelector;