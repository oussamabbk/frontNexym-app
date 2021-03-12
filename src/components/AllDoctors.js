
import React  from 'react';

class Doctor  extends React.Component {
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
            Desination:'',
            specialite:'',
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
        fetch('http://127.0.0.1:8000/api/Doctor/')
        .then(Response=>Response.json())
       
        .then(data=>
         
    
          this.setState({
            todoList:data
          })
        
          
          )
    
      }


    render (){
        var tasks = this.state.todoList
    return  (
        <div class="page-wrapper">
    <div class="content">
       
                <div class="row">
                    <div class="col-sm-4 col-3">
                        <h4 class="page-title">Doctors</h4>
                    </div>
                    <div class="col-sm-8 col-9 text-right m-b-20">
                        <p class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Doctor</p>
                    </div>
                </div>
                <div class="row">
                {tasks.map(function(task,index){
                            return(
                    <div class="col-md-4 col-sm-4  col-lg-3">
                        <div class="profile-widget">
                            <div class="doctor-img">
                                <p class="avatar"><img alt="" src="public/logo192.png"/></p>
                            </div>
                            <div class="dropdown profile-action">
                                <p class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></p>
                                <div class="dropdown-menu dropdown-menu-right">
                                    
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><p>{task.Nom} {task.Prenom}</p></h4>
                            <div class="doc-prof">{task.specialite}</div>
                            <div class="user-country">
                                <i class="fa fa-map-marker"></i> {task.adresse}
                            </div>
                        </div>
                    </div>)
                        })}
                     
                   
                    
                   






                </div>


             
            </div>
            </div>)}
}
export default Doctor;