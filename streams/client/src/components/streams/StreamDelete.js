import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete  extends React.Component {
  componentDidMount() {
    //console.log("this one get called");
    this.props.fetchStream(this.props.match.params.id)
  }

  componentDidCatch(error, info) {
    console.log(`Got exception here ${error} ${info}`);
  }

  renderActions () {
    return (
      <React.Fragment>
        <button className="ui button negative"
          onClick={this.onClickDelete}>Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  onClickDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  onDismiss () {
    history.push('/');
  }

  renderContent() {
    console.log(this.props);

    if ((this.props.streamsState && this.props.streamsState.id && !this.props.stream) ||
      (this.props.streamsState && this.props.stream && this.props.streamsState.id == this.props.stream.id)) {
      return `Failed to delete this stream, Please try again later...`;
    }

    if (this.props.stream) {
      return `Are you sure you want to delete this stream with title: '${this.props.stream.title}'?`;
    }
    else
      return `Are you sure you want to delete this stream`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        id={this.props.match.params.id}
        onDismiss={this.onDismiss}
      />
    )
  }
}
// ownProps refers to the props above
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id], streamsState: state.streamsState}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
