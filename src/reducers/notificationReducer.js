const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'TURN_ON':
      return action.notification
    case 'TURN_OFF':
      return null
    default:
      return state
  }
}

export const notificationEnable = (notification, time) => {
  return dispatch => {
    dispatch({
      type: 'TURN_ON',
      notification: notification,
    })
    setTimeout(() => {
      dispatch(notificationDisable())
    }, time * 1000)
  }
}

export const notificationDisable = () => {
  return {
    type: 'TURN_OFF',
  }
}

export default notificationReducer