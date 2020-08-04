import Base from '../../../services/base'
class TaskService extends Base {
  constructor () {
    super('/todo')
  }
}
export default new TaskService()
