import { DRUM_PLAYED } from "../actionTypes";

const drums = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open HH',
    'Z': 'Kick-n Hat',
    'X': 'Side Stick',
    'C': 'Closed HH'
};

const initialState = {
    name: 'No Drum Played'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case DRUM_PLAYED: {
            const drum_name = drums[action.drumPlayed]
            return {
                name: drum_name
            }
        };
        default:
            return state;
    }
};