import { useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

const Todo = () => {

    
      const [list,setList] = useState([]);
      const [item,setItem] = useState("");
    
      const addToList =()=>{
        list.push(item);
        setList([...list]);
        
      }
    
    const removeItem = (index)=>{
      
        list.splice(index,1);
        setList([...list])
    }

    return (
        <div>
          <Menu/>
            <div className="container">
      
        <input type="text" className="form-control" onChange={(e)=>setItem(e.target.value)} placeholder="Item"/>
        <button onClick={addToList} className="btn btn-primary">Add</button>

        <div>
        <table className="mt-5">
          <tbody className="table-bordered">
            {
              item.length!==0?(

                list.map((element,index)=>{
                  return <tr  key={index}>
                    <td>{element}</td>
                    <td><button className="btn btn-danger" onClick={()=>{removeItem(index)}}>Remove</button></td>
                  </tr>
                })
              ):(<tr></tr>)
            }
          </tbody>
        </table>
        </div>
      </div>
        </div>
    );
};

export default Todo;