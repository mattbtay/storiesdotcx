import React from "react";

class SendStory extends React.Component {

    render(){
        return (
            <div className="section section--sendstory">
                <div>
                    <form name="story-submissions" method="POST" netlify>
                        <input type="hidden" name="form-name" value="story-submissions" />
                        <input name="name" type="text" />
                        <input name="email" type="email" />

                        <div>
                            <input name="brand" type="text" />
                            <textarea name="story" />
                        </div>
                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SendStory;