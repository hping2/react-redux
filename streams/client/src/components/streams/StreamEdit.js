import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {

  componentDidMount() {
    //console.log("this one get called");
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    //console.log(this.props);
    if (!this.props.stream)
      return <div>Loading</div>

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}/>
      </div>
    )
  }
};

// ownProps refers to the props above
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(
  mapStateToProps,
  {fetchStream, editStream}
)(StreamEdit);
