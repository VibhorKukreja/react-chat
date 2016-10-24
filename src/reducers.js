/**
 * Created by Vibhor on 23/10/16.
 */


export const messages = (state, action) => {
    "use strict";
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = Object.assign({}, action.data);
            return state.concat([newMessage]);
        default:
            return state || [];
    }
};