export default (state = null, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':  return action.payload; break;
  }
  return state;
}