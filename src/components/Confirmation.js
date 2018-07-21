import React from "react";
import Content from './Content';
import Footer from "./Footer";

class Confirmation extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Content />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Confirmation;