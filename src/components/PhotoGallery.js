import React, { useState } from 'react'
import { MEMBERS } from '../shared/members'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import {Button, Card, CardImg, CardText, CardBody, CardTitle , CardSubtitle } from 'reactstrap';


function Gallery() {
    const [members,setMembers] = useState(MEMBERS);
    const [selectedMems,setSelectedMems] = useState();

    function renderSelected(members,selectedId){
        const printDes = members[selectedId]
        console.log(printDes)
        if(selectedId!=null){
            return (
                <div className='container mt-5'>
                    <Card style={{width:"80%"}}>
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
    function renderMembers(){
        return (
            members.map((el)=>{
                return(
                    <div className='container'>
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
                        </CardBody>
                    </Card> 
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
                <div className='col-12 col-md m-1'>
                    {renderSelected(members,selectedMems)}
                </div>
            </div>
        </div>
            
        
        </div>
    )
}

export default Gallery
