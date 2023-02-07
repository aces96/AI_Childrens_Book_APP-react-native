import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    story: [],
  }


export const StorySlice = createSlice( {
    name: 'story',
    initialState,
    reducers: {
        addStory: (state, action)=>{
            state.story = action.payload
        }
    }
})


export const {addStory} =StorySlice.actions;
export default StorySlice.reducer;