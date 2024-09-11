import { useParams } from "react-router-dom"

export class ApiService {
    static url = 'http://localhost:3001'
    static get(url) {
        return fetch(`${ApiService.url}${url}`)
    }

    static post(url,params={}) {
        return fetch(`${ApiService.url}${url}`,{
        method:'post', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        })
    }

    static put(url,params={}) {
        return fetch(`${ApiService.url}${url}`,{
        method:'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        })
    }

    static delete(url,params={}) {
        return fetch(`${ApiService.url}${url}`,{
        method:'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        })
    }













}