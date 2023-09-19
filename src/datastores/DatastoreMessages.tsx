import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// DatastoreMessages

/*
 * Redux Datastore for handling messages to the user
 */

type StateType = {
    text:string
}

const stateInit:StateType = {
    text: ""
}

const DatastoreMessages = createSlice({
    name: "messages",
    initialState: stateInit,
    reducers: {
        setText(state:StateType, action:PayloadAction<string>) {
            state.text = action.payload;
        }
    }
});

// Export

export default DatastoreMessages;
export const { setText } = DatastoreMessages.actions;
