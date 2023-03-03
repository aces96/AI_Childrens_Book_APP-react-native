import { configureStore } from '@reduxjs/toolkit'
import storySlice from './slices/story.slice'

export const store = configureStore({
  reducer: {
    storySlice,
  },
})