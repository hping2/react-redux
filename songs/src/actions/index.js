// action creater is a function, you can call it to generate action, e.g, object.
export const selectSong = (song) => {

  // return an action. From Redux view, actions are just objects.
  // They must have `type` property.
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
};
