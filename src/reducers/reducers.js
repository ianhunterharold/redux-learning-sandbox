import { ADD_NOTE } from '../actions/actions';
import { REMOVE_NOTE } from '../actions/actions';

const initialState = {
  testing: ['testing to see if i can keep my other states..'],
  notes: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return {
        ...initialState,
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      }
    case REMOVE_NOTE:
        return {
          notes: state.notes.filter((note, index) => index != action.id)
        };
    default:
      return state;
  };
}

export default rootReducer;