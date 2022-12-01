import React from 'react';

class Todo extends React.Component{
  constructor()
  {
    super();
    this.state={
        tasks:[{task:'Check mails',id:1},{task:'read articles',id:2},{task:'Complete HW',id:3}],
        currTask:''
    }
  }
  handleChange=(e)=>{
       console.log(e.target.value);
       this.setState({
         currTask:e.target.value
       })
  }
  handleSubmit=()=>{
         this.setState({
           tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
           currTask:''
         })
  }
  handleDelete=(id)=>{
    let narr=this.state.tasks.filter((taskObj)=>{
      return taskObj.id!=id
    })
          this.setState({
            tasks:[...narr]
          })
  }
  render(){
    console.log('render')
    return(
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>SUBMIT</button>
        <ul>
        {
          this.state.tasks.map((taskObj)=>(
              <li key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=>this.handleDelete(taskObj.id)}>DELETE</button>
              </li>
          ))
        }
        </ul>
      </div>
    )
  }
}
export default Todo;