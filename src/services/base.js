import { HTTPClient } from '../boot/axios'
import { statusResponse } from './responseService'
export default class Base {
  constructor (api) {
    this.api = api
    this.service = HTTPClient
    this.statusResponse = statusResponse
  }

  list = async ($params = '') => {
    try {
      const response = await this.service.get(this.api, { params: $params })
      return response
    } catch (error) {
      throw statusResponse(error, 'list')
    }
  };

  get = async $id => {
    try {
      const response = await this.service.get(`${this.api}/${$id}`)
      return response
    } catch (error) {
      throw statusResponse(error, 'get', 'item')
    }
  };

  create = async $data => {
    try {
      const response = await this.service.post(this.api, $data)
      return response
    } catch (error) {
      throw statusResponse(error, 'create')
    }
  };

  update = async ($data, $id) => {
    try {
      const response = await this.service.put(`${this.api}/${$id}`, $data)
      return response
    } catch (error) {
      throw statusResponse(error, 'update')
    }
  };

  updateNoId = async $data => {
    try {
      const response = await this.service.put(`${this.api}`, $data)
      return response
    } catch (error) {
      throw statusResponse(error, 'update')
    }
  };

  remove = async $id => {
    try {
      const response = await this.service.delete(`${this.api}/${$id}`)
      return response
    } catch (error) {
      throw statusResponse(error, 'remove')
    }
  };
}
