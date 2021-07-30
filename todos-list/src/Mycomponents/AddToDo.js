import React,{useState} from 'react';

export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        alert("Tile or Desc required")
        else
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add to do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value = {title } onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
  </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" value = {desc } className="form-control" onChange={(e)=>setDesc(e.target.value)} id="desc"/>
  </div>
      
                            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
                    </div>
    )
}
