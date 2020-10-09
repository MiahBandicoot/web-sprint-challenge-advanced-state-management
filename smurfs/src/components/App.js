import React, { useEffect } from "react";
import {connect} from 'react-redux'
import initialState from '../reducers/reducer'
import "./App.css";
import {addSmerf, postSmerf} from '../reducers/action'
import Form from './form'


const App = (props) => {
  useEffect(()=>{
    props.addSmerf()
  },[props.smerfs.map])
  console.log()
    return (
      <div className="App">
        <h1>working</h1>
        <Form/>
        {props.smerfs.length>0?(
         <div>
           {props.smerfs.map(item =>{
             return(
             <h2>{item.name} {item.age} {item.height}</h2>
             )
           })}
         </div> 
        ):null}
        {props.loader? <h3>Loading</h3>:null}
        {props.error? <h3>Error</h3>:null}
      </div>
    );
  }

const mapStateToProps = (state) =>{
  console.log(state)
  return{
    smerfs:state.smerfs,
    loader:state.loader,
    error:state.error,
  }
}
export default connect(mapStateToProps,{addSmerf})(App);


// import React, { Component, useEffect } from "react";
// import "./App.css";
// const App =(props)=> {

//     useEffect(()=>{
//       props.addSmerf
//     },[])
//     return (
//       <div className="App">
//         {props.smerfs.length>0}();

//       </div>
//     );
//   }
// }

// export default App;