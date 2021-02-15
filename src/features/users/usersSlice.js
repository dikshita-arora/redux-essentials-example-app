import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Tianna Jenkins'},
    { id: '1', name: 'Kenny Price'},
    { id: '2', name: 'Manny Hugh'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default usersSlice.reducer;