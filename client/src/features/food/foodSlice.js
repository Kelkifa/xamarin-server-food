import foodApi from "api/foodApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// export const todoGet = createAsyncThunk('todo/todoGet', async (data) => {
//     const response = await todoApi.get(data);
//     return response;
// })

/**
 * data: {name, description, cost, production, minMass, maxMass}
 */
export const foodCreate = createAsyncThunk('food/create', async (data) => {
    const response = foodApi.create(data);
    return response;
})

const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        loading: false,
        error: null,
        data: [] // name: String, description: String, production: String, cost: Number, unit: String, minMass: String, maxMass: String
    },
    reducers: {
        // addTodo: (state, action) => {
        //     state.user.data.push(action.payload);
        // }
    },
    extraReducers: {
        // GET
        // [todoGet.pending]: (state, action) => {
        //     state.user.loading = true;
        // },
        // [todoGet.rejected]: (state, action) => {
        //     state.user.loading = false;
        //     state.user.error = true;
        // },
        // [todoGet.fulfilled]: (state, action) => {
        //     state.user.loading = false;
        //     if (!action.payload.success) {
        //         state.user.error = action.payload.message;
        //         return state;
        //     }
        //     state.user.error = false;
        //     state.user.data = action.payload.response;
        // },
    }
})

const { reducer: foodReducer, actions } = foodSlice;

// export const { addTodo } = actions;

export default foodReducer;