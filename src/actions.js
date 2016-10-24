/**
 * Created by Vibhor on 23/10/16.
 */

export const addMessage = (_message) => ({type: 'ADD_MESSAGE', data: {message: _message.message, userID: _message.userID}});
