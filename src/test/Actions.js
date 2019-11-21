import { GET_USERS,LOADING,GET_POSTS,GET_DESCRIPTION} from "./types"
import axios from 'axios'
export const getUsers=()=>dispatch=>{
    dispatch({type:LOADING})
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => dispatch({ type: GET_USERS, payload: res.data }))
    .catch(err => console.log(err));
}
export const getPosts=(id)=>dispatch=>{
    dispatch({type:LOADING})
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res=>dispatch({ type: GET_POSTS, payload: res.data})).catch(err=>console.log(err))
}
export const getDescription=(id)=>dispatch=>{
    dispatch({type:LOADING})
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res=>dispatch({ type: GET_DESCRIPTION, payload: res.data})).catch(err=>console.log(err))
}
