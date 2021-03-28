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

export const notificationEnable = notification => {
  return {
    type: 'TURN_ON',
    notification: notification,
  }
}

export const notificationDisable = () => {
  return {
    type: 'TURN_OFF',
  }
}

export default notificationReducer