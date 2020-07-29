import { createSlice } from '@reduxjs/toolkit';

//createSlice Ֆունկցիա, որը ընդունում է սկզբնական state, ը գեներացնում է  action creators և action types

export const postSlice = createSlice({
    //վիճակի տվյալ ֆռագմենտի անունը
  name: 'post',
  // սկզբնական վիճակ տվյալ state-ի համար
  initialState: [],
    //state փոփոխության համար
  reducers: {
    add: (state, action) => {
      const { name, author, date, content } = action.payload
      state.push({ name, author, date, content })
    },
  },
});

export const { add } = postSlice.actions;
export default postSlice.reducer;
