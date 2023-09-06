import React, { useState } from 'react'

function Todolist() {
    const[activity, SetActivity]= useState("");
    const[listData, SetlistData]=useState([]);
    function addActivity(){
      //SetlistData([...listData, activity])
      //console.log(listData)
      SetlistData((listData)=>{
      const updatedList=[...listData, activity]
      console.log(updatedList)
      SetActivity('');
      return updatedList
      })
    }
    function removeActivity(i){
      const updatedListData=listData.filter((elem,id)=>{
        return i!==id;
      })
      SetlistData(updatedListData);
    }
    function removeAll(){
      
      SetlistData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input className='input' type='text' placeholder='Add activity' value={activity} onChange={(e)=>SetActivity(e.target.value)}/>
        <button className='button' onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your List: {")"}</p>
        {listData!==[] && listData.map((data, i)=>{
          return(
            <>
            <p key={i}>
              <div className='listData'>{data}</div>
              <button className='btn-position' onClick={()=>removeActivity(i)}>Remove(-)</button>
            </p>
      
          </>
          )
        })}
         {listData.length >= 1 && 
         <button className='btn-position' onClick={removeAll}> Remove All </button>}
    </div>
    </>
  )
}

export default Todolist