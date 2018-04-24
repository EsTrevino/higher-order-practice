const CHANGE_AUTH = "change_auth";

export default function(state = false, action){
  switch(action.type){
    case CHANGE_AUTH:
    return action.payload;
  }
  return state;
}
