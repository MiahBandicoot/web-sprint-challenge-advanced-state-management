import {ADDSMERF, ADDSMERFSUS, SMERFFAIL} from './action'

export const initialState = {
    smerfs: [],
    loader:true,
    error:''
}

const reducer = (state = initialState ,action) =>{
    switch(action.type){
        case ADDSMERF:
            return{
                ...state,
                loader:true,
                error:''
            }
        case ADDSMERFSUS:
            return{
                ...state,
                smerfs:action.payload ,
                loader:false,
                error:''
            }
        case SMERFFAIL:
            return{
                error:action.payload
            }
        default:
            return state
    }
}
export default reducer