import React, {useEffect, useState} from "react";
import {doGet, doPost} from "../service";
import SelectUser from "../components/SelectUser";
import PostModal from "../components/PostModal";
function Posts({history}) {
    function filter(userId) {
        return  data.filter(item=>(item.userId===parseInt(userId)) || userId ==='')
    }
    const [data,setData]= useState([])
    const [posts,setPosts]= useState([])
    const [modalVisible,setModalVisible]= useState(false)
    const [user,setUser]= useState(false)



 async function getPosts(){
 const res =  await doGet('/posts')
     setPosts(res)
     setData(res)
}
async function savePost(data){
        const res = await doPost('/posts',data)
    setData(prev=>{
        prev.unshift(res)
        setPosts([...prev])
        return prev

    })
}
useEffect(()=>{
        getPosts()
    },[])
    function openOnePost(id) {
history.push('/posts/'+id)
    }
    function onChangeUser(userId) {
        const res = filter(userId)
        setPosts(res)
    }

    function toogleModal() {
        setModalVisible(prev=>!prev)
    }
    function onSubmit(data) {
        data.user = user
        savePost(data)
    }
    function changeUser(id) {
        setUser(id)
    }

    return(
        <div className={"posts-page"}>
            <h3 className="text-center">POSTS</h3>
<div className="row">
    <div className='col-md-3'>
<SelectUser onChange={onChangeUser}/>
    </div>
</div>
            <div className="row">

                {posts.map((item,index)=>
                    <div key={index} className="col-md-3"  >
                        <div className="card my-3 post-card" onClick={()=>openOnePost(item.id)}>
                            <div className="card-header bg-dark text-white">
                                <p>{item.title}</p>
                            </div>
                            <div className="card-body">
                                <p>{item.body}</p>
                            </div></div>
                    </div>)}</div>
            <PostModal changeUser={changeUser} isOpen={modalVisible} toogle={toogleModal} save={onSubmit}/>
        </div>)}
export default Posts;