import { PlayingCard } from 'src/model/cardModel';

let handAnalysorReducer: Reducer<string> = (state: string, action: Action) => {
    if (action.type === 'ANALYSE') {
        state = "this should be the real result";
    }
    return state;
};

export default handAnalysorReducer;