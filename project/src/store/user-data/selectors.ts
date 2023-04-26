import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const getUserData = (state: State) => state[NameSpace.User].userData;
export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
