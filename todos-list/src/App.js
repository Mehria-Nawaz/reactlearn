
import './App.css';
import Header from './Mycomponents/Header';
import {Todos} from './Mycomponents/Todos';
import {Footer} from './Mycomponents/Footer';
import {AddToDo} from './Mycomponents/AddToDo';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import {About} from './Mycomponents/About';


function App() {
  let inittodo;
  if(  localStorage.getItem("todos")===null)
  inittodo=[];
  else
  inittodo=JSON.parse(localStorage.getItem("todos"));
  const onDelete=(todo)=>{
    console.log("I am onDelete todo",todo);
    setTodos(todos.filter((e)=>
    {return e!==todo;
    } ));
    localStorage.setItem("todos",JSON.stringify(todos));  }

  const addTodo=(title,desc)=>{
    console.log("ading todo",title,desc)
    let sno;
    if(todos.length===0)
    sno=1;
    else
    sno=todos[todos.length-1].sno+1;
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    console.log(mytodo)
    setTodos([...todos,mytodo]);
    

    
    

  }

  const [todos,setTodos]=useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   
  }, [todos])
  return (
    <>
    <Router>
    <Header title = "MY TODOS LIST" search={false}/>
    <Switch>
          <Route exact path="/" render={()=>{
            return (
              <> 
              <Todos todos ={todos} onDelete={onDelete}/>
              <AddToDo addTodo={addTodo}/>
              
              
              </>
            )
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
    
    <Footer/>
    </Router>
   </>
  );
}

export default App;
