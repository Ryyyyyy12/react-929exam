import React, { useState } from 'react'
import { MEMBERS } from '../shared/members'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import {Input ,Button, Card, CardImg, CardText, CardBody, CardTitle , CardSubtitle, Form, FormGroup, Label, FormFeedback } from 'reactstrap';


function Gallery() {
    const [members,setMembers] = useState(MEMBERS);
    const [selectedMems,setSelectedMems] = useState();
    const [userComment,setUserComment] = useState([])
    const [username,setUsername] = useState("");
    const [comment,setComment] = useState("");
    const [isnameValid,setnameValid] = useState(false);
    const [ismentValid,setmentValid] = useState(false);
    function clickLike(){
        alert("you like this photo")
    }
    function addComment(username,comment){
        var temp = userComment.concat({username , comment ,id:selectedMems})
        console.log(temp);
        setUserComment(temp);
    }
    function renderComment(comments,selectedId){
        const printMent = comments.filter(el=>el.id===selectedMems);
        if(printMent!=null){
            return (
                printMent.map((el)=>{
                    return (
                        <div className='mt-1 mb-1'>
                            <Card>
                                <div className='container'>
                                    <p><b>{el.username}</b>{" "+ el.comment}</p>
                                </div>
                            </Card>
                        </div>
                        
                    )
                })
            )
        }
        
    }
    function renderSelected(members,selectedId){
        const printDes = members[selectedId]
        // console.log(printDes)
        if(selectedId!=null){
            return (
                <div className='container mt-5'>
                    <Card style={{width:"100%"}}>
                        <div className='container mt-2'>
                            <h4 align="center">Description</h4>
                            <p> <b> Name : </b>{printDes.name}</p>
                            <p> <b> Fullname : </b>{printDes.fullname}</p>
                            <p> <b> Description : </b>{printDes.description}</p>
                        </div>
                    </Card>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
    function selectMember(id){
        setSelectedMems(id);
    }
    function validate(){
        if(!(username.length>=3 && username.length <= 10)){
            setnameValid(true);
            alert("username must more than 3 characters and less than 10 characters");
        }else{
            setnameValid(false);
            if(!(comment.length>=3)){
                setmentValid(true);
                alert("Comment must more than 3 characters");
            }else{
                setmentValid(false);
                addComment(username,comment)
            }
        }

    }
    function renderMembers(){
        return (
            members.map((el)=>{
                return(
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <Card style={{width:"70%"}} key={el.id} onClick={()=>selectMember(el.id)}>
                                    {/* {console.log(selectedMems)} */}
                                    <CardImg
                                    src={el.image}
                                    top
                                    width="100%"
                                    />
                                    <CardBody>
                                    <CardTitle tag="h5">
                                        {el.name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {el.fullname}
                                    </CardSubtitle>
                                        <b>Comment</b>
                                        <Form>
                                            <div className='container mb-2'>
                                                <div className='row mt-1'>
                                                    <Input type="text" 
                                                        placeholder='Username'
                                                        onChange={(event)=>setUsername(event.target.value)}
                                                        valid={!isnameValid}
                                                        invalid={isnameValid}></Input>
                                                </div>
                                                <div className='row mt-1'>
                                                    <Input type="textarea" 
                                                        placeholder='Comment'
                                                        onChange={(event)=>setComment(event.target.value)}
                                                        valid={!ismentValid}
                                                        invalid={ismentValid}></Input> 
                                                </div>
                                            </div>
                                        </Form>
                                        <div className='mb-2'>
                                        <b>give score</b>
                                        <Form>
                                            <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Input>  
                                        </Form>
                                        </div>
                                        <Button color="success"onClick={()=>validate()}> Comment!</Button>
                                        <Button color="primary"onClick={()=>clickLike()}>Like</Button>
                                    </CardBody>
                                </Card> 
                            </div>
                            
                        </div>
                        
                    </div>
                      
              )
                
            })
        )
    }

    return (
        <div>
        
        <div className='container'>
            <div className='row align-items-start mt-3'>
            <h3> Photo Gallery </h3>
            <p> Click at the card to show description on the right</p>
            </div>
            <div className='row'>
                <div className="col-12 col-md m-1">
                    {renderMembers()}
                    
                </div>
                <div className='col'>
                    <div className='container'>
                        <div className='row'>
                            {renderSelected(members,selectedMems)}
                        </div>
                        <div className='row mt-5'>
                            <Card style={{width:"100%" ,border:"0px",borderBlockColor:"lightblue"}}>
                                <CardTitle><h4 align="center">Comments</h4></CardTitle>
                                {renderComment(userComment,selectedMems)}
                            </Card>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
        </div>
            
        
        </div>
    )
}

export default Gallery
