import {CHANGE_AUT} from '../actions/types';

export default function(state = false, action){
  switch(action.type){
    case CHANGE_AUT:
    return action.payload;
  }
  return state;
}
