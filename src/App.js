
import './App.css';
import React from 'react';
import Doctor from './components/AllDoctors';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoList:[],
      activeItem:{
        id:null,
        Nom:'',
        Prenom:'',
        mobile:null,
        picture:null,
        Email:'',
        password:'',
        datedenaisance:'',
        adresse:'',
        description:'',
        sexe:'',
        statue:'',
      },
      editing:false
    }
    this.fetchtasks=this.fetchtasks.bind(this)

  };
  componentWillMount(){
    this.fetchtasks()

  }
  fetchtasks(){
    console.log('fetching..')
    fetch('http://127.0.0.1:8000/api/User/')
    .then(Response=>Response.json())
   
    .then(data=>
     

      this.setState({
        todoList:data
      })
    
      
      )

  }
 

  render(){
   
    return(
      <div>
        <Doctor/>

      </div>
      
    
    )
  }

  

}

export default App;
