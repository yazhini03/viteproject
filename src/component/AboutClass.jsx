import React,{Component} from "react";

export class Aboutclass extends Component{
    constructor(props){
        super(props)

        this.state ={
            name:this.props.name,
            work:this.props.work,
            username:""
        }
    }
    inchange(event){
        this.setState({
            username:event.target.value,
        })
        
        
    }
    clickEvent(){
        this.setState({
           name:"About class component"
        })
        alert("name updated")
    }
    render()
    {
        return(
            <div>
            <h1>class component</h1>
            <b>Name: {this.state.name}</b>
            <br></br>
            <b>Work: {this.state.work}</b>
            <br></br>
            <b>USERNAME:{this.state.username}</b><br></br>
            <input onChange={(event)=>this.inchange(event)}></input>
            <button onClick={()=>this.clickEvent()}>tap</button></div>
            

        )
        

    }
}
export default Aboutclass