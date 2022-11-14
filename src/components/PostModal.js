import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectUser from "./SelectUser";
import {useForm} from "react-hook-form";
function PostModal({toogle,isOpen,save,changeUser}) {
    const { register, handleSubmit, watch, errors  } = useForm();
    return(
            <Modal isOpen={isOpen} toogle={toogle}>
<ModalHeader>
    Addpost
</ModalHeader>
<ModalBody>
   <form onSubmit={handleSubmit(save)} id={"post-form"}>
       <input type="text" name={"title"} placeholder={"title"} className={"form-control my-3"} ref={register}/>
       <SelectUser name={"user"} onChange={changeUser}/>
       <textarea className={"form-control my-3"} ref={register} placeholder={'body..'} name={"body"}/>
   </form>
</ModalBody>
    <ModalFooter >
        <button  className={"btn btn-dark"} form="post-form" type={"submit"}>Save</button>
       <button className={"btn btn-danger"} type="button" onClick={toogle}>Cancel</button>
    </ModalFooter>
            </Modal>
    )
}
export default PostModal;