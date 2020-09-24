import { DRUM_PLAYED } from "./actionTypes";

export const drumPlayed = drumId => ({
    type: DRUM_PLAYED,
    drumPlayed: drumId
});