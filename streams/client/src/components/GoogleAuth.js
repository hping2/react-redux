import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () =>{
      // The js script lib was loaded at index.html
      window.gapi.client.init({
        clientId: '67349563804-4duihnb3tkjsfh0a8oieus69ui39d9cj.apps.googleusercontent.com',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:3000',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn)
      this.props.signIn(this.auth.currentUser.get().getId());
    else
      this.props.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div>Not know whether signed</div>
      )
    } else if (this.props.isSignedIn ) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
            Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"/>
            Sign In with google
        </button>
      )
    }
  }

  render() {
      return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
