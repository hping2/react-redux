import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {

  // After we used fetchPostsAndUsers, there is no need to call fetchUser
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const {user} = this.props;

    if (!user) {
      return null;
    }
    return <div>{user.name}</div>
  }
}

// state of redux
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}

// export default connect(mapStateToProps, {fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);
