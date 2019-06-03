import React from 'react';
import { connect } from 'react-redux';

// we can just use (props) => { ... }
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  )
}

// This is redux state, refer the reducers/index.js combineReducer for it.
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
