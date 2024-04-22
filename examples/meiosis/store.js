
import { RiotMeiosis } from '@riot-tools/meiosis';

const state = {
  firstname     : 'John',
  lastname      : 'Wick',
  firstnameEdit : '',
  lastnameEdit  : '',
  displayForm   : false
}


/** Create the state manager instance */
const stateManager = new RiotMeiosis(state, { flushOnRead: false, statesToKeep: 1 });

/** Extract the state stream **/
const { stream } = stateManager;

/** Add Root state reducer: merge the old and new state objects */
stream.addReducer((newState, oldState) => {
    // Object oldState { firstname: "John", lastname: "Wick", firstnameEdit: "", lastnameEdit: "", email: "", displayForm: false } 
    // Object newState { displayForm: true }
    return {
        ...oldState,
        ...newState
    }
});

export default { 
    connect: function (component) {
        return stateManager.connect((globalState, ownState) => ({ ...ownState, ...globalState }))(component)
    },
    dispatch: stateManager.dispatch
};

