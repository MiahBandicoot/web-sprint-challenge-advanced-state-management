import axios from 'axios'
export const ADDSMERF = 'ADDSMERF'
export const ADDSMERFSUS = 'ADDSMERFSUS'
export const SMERFFAIL ='SMERFFAIL'
export const POSTSMERF = 'POSTSMERF'

export const addSmerf = () => (dispatch) => {
    dispatch({type:ADDSMERF})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
    dispatch({type:ADDSMERFSUS,payload:res.data/*.data.results*/})
        console.log(res.data)
    })
    .catch(error =>{
        dispatch({type:SMERFFAIL, payload:error})
    })
}
export const postSmerf = (newSmerf) => (dispatch) =>{
    dispatch({type:POSTSMERF})
    axios.post('http://localhost:3333/smurfs', newSmerf)
    .then(res => {
        dispatch({type:POSTSMERF})
        console.log(res)
    })
}
