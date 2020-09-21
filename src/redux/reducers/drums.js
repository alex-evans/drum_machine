import { PLAY_DRUM } from "../actionTypes";

const initialState = {
    drumPlayed: 'Nothing Played'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case PLAY_DRUM: {
            return {
                ...state,
                drumPlayed: action.drumPlayed
            }
        };
        default:
            return state;
    }
};