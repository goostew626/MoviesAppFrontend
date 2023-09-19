import React from "react";
import { Provider } from "react-redux";

import Datastore from "../datastores/Datastore";
import Router from "./Router";
import Messages from "./partials/generic/Messages";

// App

/*
 * The primary entry point for the application
 */

const App:React.FC<{}> = () => {

    return(
        <Provider
            store={Datastore}
        >
            <Router />
            <Messages />
        </Provider>
    );

}

// Export

export default App;
