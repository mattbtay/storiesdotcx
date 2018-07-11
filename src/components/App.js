import React from "react";
import Stage from "./Stage";

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
            <Stage />
            <div className="app">
                <p>hi</p>
            </div>
            </React.Fragment>
        )
    }
}

export default App;