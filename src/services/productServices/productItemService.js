import { apiCall } from './apiCalling'
import { setting } from '../../settings'

export default () => {
    

     const get = () => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "GET",
          request_URI: "productitem",
          request_BODY: ""
        }
        return apiCall(postData);
      }
    
       const getAll = () => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "GET",
          request_URI: "productitem/all",
          request_BODY: ""
        }
        return apiCall(postData);
      }
    
    
       const getOne = (id) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "GET",
          request_URI: "productitem/" + id,
          request_BODY: ""
        }
        return apiCall(postData);
      }
    
       const add = (data) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "POST",
          request_URI: "productitem",
          request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
      }
    
       const update = (data, id) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "PUT",
          request_URI: "productitem/" + id,
          request_BODY: JSON.stringify(data)
    
        }
        return apiCall(postData);
      }
    
       const Delete = (id) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "DELETE",
          request_URI: "productitem/" + id,
          request_BODY: ""
        }
        return apiCall(postData);
      }
    
       const search = (data) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "POST",
          request_URI: "productitem/search",
          request_BODY: JSON.stringify(data)
    
        }
        return apiCall(postData);
      }
    
       const searchAll = (data) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "POST",
          request_URI: "productitem/search/all",
          request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
      }
    
       const advancedSearch = (data) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "POST",
          request_URI: "productitem/advancedsearch",
          request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
      }
    
       const advancedSearchAll = (data) => {
        var postData = {
          service_NAME: setting.service_NAME,
          request_TYPE: "POST",
          request_URI: "productitem/advancedsearch/all",
          request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
      }
    
       const custom = (service, type, url, data) => {
        var postData = {
          service_NAME: service,
          request_TYPE: type,
          request_URI: url,
          request_BODY: JSON.stringify(data)
        }
        console.log(postData);
        return apiCall(postData);
    }
    
    return {add , get , getAll , getOne , search , searchAll , advancedSearch , advancedSearchAll , custom , Delete , update}
    
}