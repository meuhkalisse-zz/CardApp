import { PlayerModel } from 'src/model/player';

let playerListReducer: Reducer<Array<PlayerModel>> = (state: Array<PlayerModel>, action: Action) => {
  if (action.type === 'ADD') {
    state.push(action.payload);
  }
  if (action.type === 'REMOVE') {
    state.splice(action.payload, 1);
  }
  return state;
};

export default playerListReducer;