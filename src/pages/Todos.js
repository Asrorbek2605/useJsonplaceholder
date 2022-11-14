import React, {useEffect, useState} from "react";
import {doGet} from "../service";
import Todo from "../components/Todo"
import SelectUser from "../components/SelectUser";
function Todos() {
    const [todos,setTodos]= useState([]);
    const [data,setData]= useState([]);
    const [currentUser,setCurrentUser]= useState('');
    const [completed,setCompleted]= useState(false);
    const [isFiltering,setIsFiltering]= useState(false);
    const [page,setPage]= useState(1);
    const checkStyle = {
        transform:"scale(2)"
    }
    function filter(userId,completed,page) {
   return      data.filter((item,index)=>(item.userId == userId || !userId) && (item.completed === completed || !isFiltering))
       .filter((item,index)=> index>=(page-1)*10 && index<page*10)
    }
  async  function getTodos(){
const res = await doGet('/todos')
      setTodos(res.filter((item,index)=>index>=0 && index <10 ))
      setData(res)
    }
    useEffect(()=>{
getTodos()
    },[])
  function  onChangeUserSelect(userId) {
        const res = filter(userId,completed,page)
        setTodos(res)
      setCurrentUser(userId)
    }
    function handleCheck(event) {
        let checked = event.target.checked;
     const res =  filter(currentUser,checked,page)
setCompleted(checked)
        setTodos(res)
        setIsFiltering(true)
    }
    function reset() {
        setTodos(data)
        setCurrentUser('')
        setCompleted(false)
        setIsFiltering(false)
    }
    function onNext() {
        setPage(prevState => prevState+1)
    }
    function onPrev() {
        setPage(prevState => prevState -1)
    }
useEffect(()=>{
 const res = filter(currentUser,completed,page)
    setTodos(res)
    },[page])
    return(
        <div>
            <div className="row">
                <div className='col-md-1'>
                    <button type="button" className="btn btn-success" onClick={reset}>reset</button>
                </div>

                <div className='col-md-3'>
<SelectUser onChange={onChangeUserSelect}/>
                </div>
                <div className="col-md-3">
                    <label>
                        completed
                    <input type="checkbox" className="mx-4" onChange={handleCheck} checked={completed} style={checkStyle}/>
                    </label>
                </div>
            </div>

            <div className="row">
            <h3 className="text-center">TODOS</h3>
            {todos.map((item,index)=><Todo key={index}
            item={item}
            />)}
        </div>
            <div className="row">
                <div className="col-md-2">
                    <button className="btn btn-dark" type="button" onClick={onPrev}>
                        {"<<"} prev
                    </button>
                </div>
                <div className="col-md-1">
<h2>                    {page}
</h2>                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark" type="button" onClick={onNext}>
                        {">>"} next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Todos;