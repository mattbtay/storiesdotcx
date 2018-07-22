import React from "react";
import { Link } from "react-router-dom"
import Logo from "./Logo";

class Toolbar extends React.Component {

    render(){


        return (
            <div className="toolbar">
                <div className="logoWrap">
                    <Logo />
                </div>
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </div>
        )
    }
}

export default Toolbar;