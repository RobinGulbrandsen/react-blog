export default (state = null, action) => {
  switch (action.type) {
    case 'GET_PROJECT':  return action.payload; break;
  }
  return state;
}