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
    this.props.onSubmit();
    if(this.state.username.length > 0 && this.state.password.length > 0){
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
      <form>
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
          <button type="submit" onClick={this.switcheroo}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
