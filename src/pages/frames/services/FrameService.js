import Base from '../../../services/base'
class FrameService extends Base {
  constructor () {
    super('/frame')
  }

  list = async ($params = '') => {
    try {
      const { data } = await this.service.get('frames', { params: $params })
      return data
    } catch (error) {
      throw this.statusResponse(error, 'list')
    }
  };
}
export default new FrameService()
