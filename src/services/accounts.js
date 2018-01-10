import {AccountsResource} from 'services/resources'

export const userLogin = (username, password) => {
  return AccountsResource.save({type: 'login'}, {username: username, passwd: password}).then((response) => {
    return response.body
  })
}
