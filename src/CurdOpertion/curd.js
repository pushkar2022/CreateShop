import React, { useEffect, useState } from 'react'
import './curd.css'
import { handleSaveRequest, handleUpdateRequest, handledeleteRequest, handlegetRequest } from '../Api/student'
function Curd() {
  let dataArry=['Name','Class','Role','Edit','Delete']
  // let dataValues=[{name:'Pushkar',class:'M.C.A',roll:1},{name:'Pushkar1',class:'M.C.A1',roll:2}]
  const [open,setOpen]=useState(false)
  const [name,setName]=useState('')
  const [clas,setClas]=useState('')
  const [roll,setRoll]=useState('')
  const [editId,setEditId]=useState('')
  const [dataValues,setDataValues]=useState([])

  const getAlldata=async()=>{
    let data=  await handlegetRequest()
    setDataValues(data||[])
    }
  useEffect(()=>{
   

    getAlldata()

  },[])



  const handleSaveData=async()=>{
    console.log('save data',name,clas,roll)
    let data={
      name,
      clas,
      roll
    }

    if(editId){
      data.id=editId
      await handleUpdateRequest(data)
      setEditId(0)

    }else{
     await handleSaveRequest(data)

    }
    getAlldata()
    setOpen(false)
  }
  const handleDelete=async(id)=>{
    console.log('delete data',name,clas,roll)
    await  handledeleteRequest(id)
    getAlldata()

  }
  const handleEdit=(id)=>{
    console.log('edit data',id)
    let data=dataValues.find((item)=>item.id==id)
    console.log('edit data--',data)
    setName(data?.name)
    setClas(data.class)
    setRoll(data.roll)
    setEditId(id)
    setOpen(true)
    
   
  }
  return (
    <div className='loginsignup'>
   

    <div id="myModal" class="modal" style={{ display: open ? 'block' : 'none' }}>

 
  <div class="modal-content">
    <span class="close" onClick={()=>setOpen(false)}>&times;</span>
    <div className='formContainer'>

    <label>Enter You Name</label>
    <input type='text' placeholder='Enter You name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <label>Enter You Class</label>
    <input type='text' placeholder='Enter You Class'value={clas} onChange={(e)=>{setClas(e.target.value)}}/>
    <label>Enter You roll</label>
    <input type='text' placeholder='Enter You roll' value={roll} onChange={(e)=>{setRoll(e.target.value)}}/>
<button onClick={()=>handleSaveData()}> Save </button>
</div>

  </div>

</div>







<div className='table-contaner'>
  <div className='heading'>
  
    <h1> Sudent Form</h1>
  <button onClick={()=>setOpen(true)}>Open Modal</button>
  </div>




<table>
  <tr>
    {dataArry?.map((item,index)=>(

      <th>{item}</th>

    ))}
    
  </tr>
  {dataValues?.map((item,index)=>(
    <tr>
    <td>{item?.name}</td>
    <td>{item?.class}</td>
    <td>{item?.roll}</td>
    <td onClick={()=>handleEdit(item?.id)}><span>Edit</span> </td>
    <td onClick={()=>handleDelete(item?.id)}><span>Delete</span></td>
  </tr>

  ))}
 

</table>
</div>
</div>



  )
}

export default Curd