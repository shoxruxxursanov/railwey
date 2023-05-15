import React from "react";
import {request} from '../config/request'

export const useAxios = ({url=null, body=null, method=null, })=>{
const[data, setData]=React.useState([]);
const[loading, setLoading]=React.useState(true);
const[error, setError]=React.useState({});
const fetchData =()=>{
  request({method, body, url}).then((response)=>{
    setData( response.data);
    setLoading(false);
  }).catch((error)=>{
    setError(error)
  })
}

React.useEffect(()=>{
if(url && method){
  fetchData()
}
}, [url, method,body])
  return{
    data, loading, error
  }
}