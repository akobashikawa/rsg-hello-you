import React, { Component } from 'react';

class HelloYou extends Component {

	constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  helloBtnHandler() {
    this.setState({name: this.nameInput.value});
  }

  render() {
    return (
      <div className="Hello">
        <div className="container">
          <div className="input-group col-xs-4 col-xs-offset-4">
            <input className="form-control" type="text" placeholder="Your Name"
              ref={input => this.nameInput = input}
            />
            <div className="input-group-btn">
              <button className="btn" onClick={() => this.helloBtnHandler()}>Hello</button>
            </div>
          </div>
          <div>
            {this.state.name && (
              <h1>Hello {this.state.name}!</h1>
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default HelloYou;