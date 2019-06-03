import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item"  key="{song.title}">
          <div className="right floated content">
            <button
              onClick={ () => {
                this.props.selectSong(song);
              }}
              className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render () {
      //console.log(this.props);

      return (
        <div className="ui divided list">{this.renderList()}</div>
      )
  }
}

// state is all inside redux store
const mapStateToProps = (state) => {
  // thus this.props === { songs state.songs }
  return { songs: state.songs};
}

// using connect(mapStateToProps), you can refer this.props
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
