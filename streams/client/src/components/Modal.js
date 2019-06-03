import React from 'react';
import ReactDOM from 'react-dom';
import { fetchStream } from '../actions';
import { connect } from 'react-redux';


class Modal extends React.Component {

  onDismissHere = () => {
    this.props.onDismiss();
  }

  render() {
    //console.log(this.props);
    return ReactDOM.createPortal(
      <div
        className="ui dimmer modals visible active"
        onClick={this.onDismissHere}>
        <div onClick={ e => e.stopPropagation() }
          className="ui standard modal visible active">
          <div className="header">{this.props.title}</div>
          <div className="content">{this.props.content}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

// ownProps refers to the props above
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.id]}
}

//export default Modal;
export default connect(mapStateToProps, {fetchStream})(Modal);
