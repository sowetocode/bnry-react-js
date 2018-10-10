import { GET_IMAGES, SET_INDEX, SET_TRANSLATE_VALUE, SET_DESCRIPTION, SET_DESCRIPTION_BACK  } from './actions';

// Initial State
const initialState = {
    images: [],
    index: 0,
    description: "",
    descriptionBack: "",
    translateValue: 0
};

export default (state = initialState, action) => {

    switch(action.type) {
        case GET_IMAGES:
            return { ...state, images: action.images }
        case SET_INDEX:
            return { ...state, index: action.payload }
        case SET_TRANSLATE_VALUE:
            return { ...state, translateValue: action.payload }
        case SET_DESCRIPTION:
            return { ...state, description: action.payload }
        case SET_DESCRIPTION_BACK:
            return { ...state, descriptionBack: action.payload }
        default:
            return state;
    }
}