import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { EditAgeAction, EditNameAction, ProfileAction, ProfileActionType } from './reducer';

const editName = (name:string):EditNameAction => {
  return {
    type: 'PROFILE_EDIT_NAME',
    payload: {
      name,
    },
  };
};

const editAge = (age:number):EditAgeAction => {
  return {
    type: 'PROFILE_EDIT_AGE',
    payload: {
      age,
    },
  };
};

export const editNameAction = (name:string) => {
  return (dispatch:Dispatch):Promise<string> => {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        dispatch(editName(name));
        resolve(name);
      }, 1000);
    });
  };
};

export const editAgeAction = (age:number) => {
  return (dispatch:Dispatch):Promise<number> => {
    return new Promise<number>(resolve => {
      setTimeout(() => {
        dispatch(editAge(age));
        resolve(age);
      }, 1000);
    });
  };
};

export type ProfileDispatch = ThunkDispatch<ProfileActionType, null, ProfileAction>;