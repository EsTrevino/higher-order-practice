import CHANGE_AUT from './types.js';

export function authenticate(isLoggedIn){
  return{
    type: CHANGE_AUT,
    payload: isLoggedIn
  };
}
