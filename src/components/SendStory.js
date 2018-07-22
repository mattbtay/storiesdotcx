import React from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class SendStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Name: "", Email: "", Story: "", Company: "", FormHidden: 0 };

        this.resetForm = this.resetForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "story-submissions", ...this.state })
        })
          .then(() => {
              this.setState({FormHidden:1});
                //console.log('submitted');
          })
          .catch(error => alert(error));

        e.preventDefault();
      };

      resetForm = e => this.setState({Story: "", Company:"", FormHidden: 0});

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){

        const { Name, Email, Story, Company, FormHidden } = this.state;

        return (
            <div className="section section--sendstory">

                <h2  className="recent-title">{FormHidden ? 'Thank you' : 'send us your story'}</h2>

                <div className="storyForm--wrap">
                    <form className={FormHidden ? 'form-hidden': ''} onSubmit={ this.handleSubmit }>
                        <div>
                            <textarea placeholder="Tell us about your experience" className="story--storyContent" value={Story} onChange={ this.handleChange } name="Story" />
                        </div>
                        <div>

                            <input className="story--company" autoComplete="off" placeholder="What company is your story about?" name="Company" value={ Company } onChange={this.handleChange} type="text" />


                        </div>
                        <div className="story--userInfo">
                            <input name="Name" placeholder="Your name" autoComplete="off" value={ Name } onChange={this.handleChange} type="text" />
                            <input name="Email" placeholder="Email address" value={ Email } onChange={this.handleChange} type="email" />
                        </div>
                        <div className="story--submitWrap">
                            <button className="story--submit" disabled={!Email || !Name || !Company ? 'true' : ''} type="submit">Send <span role="img" aria-label="fire">🔥</span></button>
                        </div>
                    </form>

                    <div className={ `thankyou-message ${!FormHidden ? 'form-hidden' : ''}` }>

                        <img className="giphy" src="https://media.giphy.com/media/KJ1f5iTl4Oo7u/200w_d.gif" alt="tom hanks saying thanks" />

                        <p className="thanks-message">Thanks for the story, we're working on compiling a great list for our newsletter, if needed we may reach out to you for more infomation.</p>

                        <button className="story--submit" onClick={ this.resetForm }>Another?</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default SendStory;