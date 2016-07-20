import * as types from './types';

/*
*   room
*/
export function getRoomList(param) {
  return { type: types.GET_ROOM_LIST, param }
}

export function createRoom(param) {
  return { type: types.CREATE_ROOM, param }
}

export function enterRoom(param) {
  return { type: types.ENTER_ROOM, param }

}

export function leaveRoom(param) {
  return { type: types.LEAVE_ROOM, param }

}

/*
*   messages
*/

export function loadMessage(param) {
  return { type: types.LOAD_MESSAGE, param }

}

export function sendMessage(param) {
  return { type: types.SEND_MESSAGE, param }

}

export function updateMessage(param) {
  return { type: types.UPDATE_MESSAGE, param }

}

/*
*   notify
*/

export function enterNotify(param) {
  return { type: types.ENTER_NOTIFY, param }

}

export function leaveNotify(param) {
  return { type: types.LEAVE_NOTIFY, param }

}
