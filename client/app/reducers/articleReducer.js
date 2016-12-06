export default function (state = null, action) {
  switch (action.type) {
    case 'GET_ARTICLE': return action.payload; break;
  }
  return state;
}
