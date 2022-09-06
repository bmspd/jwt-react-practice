import * as UserActionCreators from './users'
import * as AuthActionCreators from './auth'

const ActionCreator = {
  ...UserActionCreators,
  ...AuthActionCreators,
}

export default ActionCreator
