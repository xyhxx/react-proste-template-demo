const init = {
  name: 'unset',
  age: 0,
};

export type ProfileState = typeof init;

export type EditNameAction = {
  type: 'PROFILE_EDIT_NAME',
  payload: {
    name: string,
  },
};
export type EditAgeAction = {
  type: 'PROFILE_EDIT_AGE',
  payload: {
    age: number,
  },
};
export type ProfileActionType = 'PROFILE_EDIT_NAME' | 'PROFILE_EDIT_AGE';
export type ProfileAction = EditNameAction | EditAgeAction;

export default (state = init, action: ProfileAction):ProfileState => {
  switch (action.type) {
    case 'PROFILE_EDIT_NAME': {
      return {...state, name: action.payload.name};
    }
    case 'PROFILE_EDIT_AGE': {
      return {...state, age: action.payload.age};
    }
    default: {
      return state;
    }
  }
};