import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';

const initialState: any = {
    users: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    }
});

export const { setUsers } = userSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default userSlice.reducer;