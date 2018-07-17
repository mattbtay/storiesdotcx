import React from "react";

class SendStory extends React.Component {

    render(){
        return (
            <div className="section section--sendstory">

                <h2 className="recent-title">send us your story</h2>

                <div className="storyForm--wrap">
                    <form name="story-submissions" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div>
                            <textarea name="Story" />
                        </div>
                        <div>
                            <input type="hidden" name="form-name" value="story-submissions" />
                            <input name="Name" type="text" autoComplete="off" />
                            <input name="Email Address" type="email" />
                        </div>
                        <div>
                            <input name="Company" type="text" />

                        </div>
                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SendStory;