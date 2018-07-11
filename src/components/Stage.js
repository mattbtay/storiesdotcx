import React from "react";

class Stage extends React.Component {

    render(){
        return (
            <div className="stage">
                <header>
                    <p>stories.cx</p>
                </header>
                <p>stage</p>
                <div>
                    <input type="text" />
                    <button type="submit">Signup</button>
                </div>
                <p>stage</p>
            </div>
        )
    }
}

export default Stage;