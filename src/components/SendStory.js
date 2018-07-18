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
      }

      /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "story-submissions", ...this.state })
        })
          .then(() => {
              this.setState = {
                  FormHidden:1
                }
                //console.log('submitted');
          })
          .catch(error => alert(error));

        e.preventDefault();
      };

      resetForm = e => {
        e.preventDefault();

        this.setState({
            Story: "",
            Company:"",
            FormHidden: 0
        })

      }

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){

        const { Name, Email, Story, Company, FormHidden } = this.state;

        return (
            <div className="section section--sendstory">

                <h2 className="recent-title">send us your story</h2>

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
                            <button className="story--submit" type="submit">Send <span role="img" aria-label="fire">🔥</span></button>
                        </div>
                    </form>

                    <div className={ `thankyou-message' + ${!FormHidden ? 'form-hidden' : ''}` }>

                        <div className="giphy-wrap"><iframe title="giphy tom hanks cause thanks" src="https://giphy.com/embed/KJ1f5iTl4Oo7u" width="100%" height="100%" frameBorder="0" className="giphy-embed giphy" allowFullScreen></iframe></div>

                        <h2>Thank you for your submission</h2>

                        <button onClick={ this.resetForm }>Another?</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default SendStory;