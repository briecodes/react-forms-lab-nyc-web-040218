import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  switcheroo = (e) => {
    e.preventDefault();
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit(this.state);
    }
  }

  update = (e) => {
    if (e.target.id === 'test-username'){
      this.setState({
        username: e.target.value
      })
    }else{
      this.setState({
        password: e.target.value
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.switcheroo}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.update} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.update} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
