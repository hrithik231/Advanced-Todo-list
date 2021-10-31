import React,{useState} from 'react';
import './App.css'
function App(){

  const[Inputdata,setData]=useState('');
  const[items, setitems]=useState([]);
  
  /*Add items */
  const additem=()=>{
    if(!Inputdata)
    {
        alert("Data is empty!")
    }
    else
    {
      setitems([...items,Inputdata]);
      setData(''); 

    }
  }

  /* delete items functionality */
  const deleteitems=(id)=>{
    console.log(id);
    const updateitems= items.filter((ele, ind)=>{
      return ind !== id;
    });
    setitems(updateitems);
  }

  /*Remove all items */
  const removeAll=()=>{
    setitems([]);
  }
  /*Change theme*/
  const change=()=>{
    document.body.style.background="#20b2aa";
    document.body.style.color="black";
  }
  const dbchange=()=>{
    document.body.style.background="#c2a5fc";
    document.body.style.color="black";
  }
  return(
    <>
    <div className="upper-heading">
          <h1>Todo-List</h1>
           <span className="span">Want to make progress in your daily tasks?</span>
           <button className="theme" onClick={change} onDoubleClick={dbchange}>Change-theme</button>
        </div>    
    <div className="inner-border">
      <input placeholder="Add task" value={Inputdata} onChange={(e)=>setData(e.target.value)}></input>
      <button className="btn1" onClick={additem}>Add</button>

      {
        items.map((ele,index)=>{
          return(
            <div className="next-inner" key={index}>
              <span className="h3">{ele}</span>
              <button className="btn2" onClick={()=>deleteitems(index)}>Delete</button>
          </div>
          )
        })
      }
      <div className="save_btn">
      <button className="btn3" onClick={removeAll}>Clear All</button>
    </div>
    </div>
    <div className="footer">
      <footer>
        <span>Copyright ⓒ 2021-2021 Ritik Tyagi Intech All Rights reserved.
       Please dispose of e-waste and plastic waste responsibly.</span></footer></div>
    </>
  )
}
export default App;