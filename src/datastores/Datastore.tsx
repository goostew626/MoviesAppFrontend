import { configureStore } from "@reduxjs/toolkit";

import DatastoreMessages from "./DatastoreMessages";
import DatastoreMoviesSearchMemory from "./DatastoreMoviesSearchMemory";

// Datastore

/*
 * Handle the primary Redux Datastore with all of the secondary Datastores
 */

const Datastore = configureStore({
    reducer: {
        messages: DatastoreMessages.reducer,
        moviesSearchMemory: DatastoreMoviesSearchMemory.reducer
    }
});

// Export

export default Datastore;
export type RootState = ReturnType<typeof Datastore.getState>;
