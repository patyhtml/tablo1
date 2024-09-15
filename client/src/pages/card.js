import Card from "../modules/tablo/card";
import { ApiService } from '../services/apiService';
import { filelist } from '../services/apiRouteService';
import { tasklist } from '../services/apiRouteService';


function Card() {
    ApiService.get(tasklist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })
    ApiService.post(tasklist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })

    ApiService.put(taskist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })

    ApiService.delete(tasklist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })


    ApiService.get(filelist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })
    ApiService.post(filelist)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
    })
  
    return (
     
        <Card></Card>
        
    )
}   

export default Card;