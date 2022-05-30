import React from 'react'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import { Card, CardImg, CardText, CardBody, CardTitle , CardSubtitle } from 'reactstrap';
function Aboutme() {
  return (
    <div>
      
        <div className='container'>
            <div className='row align-items-start mt-3'>
            <h3> About me </h3>
            </div>
            <div className='row align-items-start mt-3'>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2021/05/27/blackpink-member-lisa.jpg"
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Avatar
                        </CardTitle>
                        <CardText>
                            <small className="text-muted">
                            Motto
                            </small>
                        </CardText>
                        <CardText>
                        Don’t think that you’re gonna lose when you don't even start
                        </CardText>
                        
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <div className='container'>
                        <div className='row'> 
                            <Card>
                                <div className='ms-2 mt-2'>
                                    <p> <b> Name </b>Kevalin Srisakulpong</p>
                                </div>
                                <div className='ms-2'>
                                    <b> Education </b>
                                    <ul>
                                        <li><b> college : </b> King Mongkut's University of Technology Thonburi </li>
                                        <li><b> high school : </b> Satrisisuriyothai School </li>
                                        <li><b> elementary school : </b> Kosolvithaya school </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                        <div className='row mt-2'> 
                            <Card>
                                <div className='ms-2 mt-3'>
                                <CardTitle>
                                    <h5>Favorite subjects</h5>
                                </CardTitle>
                                <div className='ms-2'>
                                    <ul>
                                        <li><b> Art </b> because i like drawing and painting  </li>
                                        <li><b> Computer </b> because I like coding</li>
                                        <li><b> PE </b> because I can play sports with my freinds</li>
                                    </ul>
                                </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className='row align-items-start mt-3'>
                <div>
                    <h4> Favorite Movie</h4>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                            Itaewon class
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            k-drama
                        </CardSubtitle>
                        </CardBody>
                        <img
                        alt="Card image cap"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Itaewon_Class.jpg/250px-Itaewon_Class.jpg"
                        width="100%"
                        />
                        <CardBody>
                        <CardText>
                        An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                            Twenty-Five Twenty-One
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            k-drama
                        </CardSubtitle>
                        </CardBody>
                        <img
                        alt="Card image cap"
                        src="https://asianwiki.com/images/1/1c/Twenty-Five_Twenty-One-p2.jpg"
                        width="100%"
                        />
                        <CardBody>
                        <CardText>
                        In a time when dreams seem out of reach, a teenage fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life.
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                            Spider-Man: No Way Home
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Marvel
                        </CardSubtitle>
                        </CardBody>
                        <img
                        alt="Card image cap"
                        src="https://s359.kapook.com/pagebuilder/adc76ce6-60b2-4fd6-83ae-cc6cdb8aafd2.jpg"
                        width="100%"
                        />
                        <CardBody>
                        <CardText>
                        Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Aboutme
