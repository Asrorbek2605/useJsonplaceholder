
 function Todo({item}) {
    const checkStyle = {
        transform:"scale(2)"
    }
     return(
<div>
    <div className="row">
        <div className="col-md-1">
            <input type="checkbox" style={checkStyle} id={'checkbox'+item.id} checked={item.completed}/>
        </div>
        <div className="col-md-5">
            <h3><label  htmlFor={'checkbox'+item.id}>{item.title}</label></h3>
        </div>
    </div>
</div>     )
 }
 export default Todo;