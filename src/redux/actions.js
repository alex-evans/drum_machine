import { PLAY_DRUM } from "./actionTypes";

export const playDrum = drumId => ({
    type: PLAY_DRUM,
    drumPlayed: drumId
});