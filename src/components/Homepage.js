import React from 'react'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import { UncontrolledCarousel ,Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
function Home() {
  return (
    <div>
      
        <div className='container'>
            <div className='row align-items-start mt-3'>
            <h3> Home </h3>
            </div>
            <div className='row align-items-start mt-3'>
            <h4> Featured Photo </h4>
                <div className='col-12 col-md m-1'>
                    <Card>
                    <UncontrolledCarousel
                        items={[
                            {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                            },
                            {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                            },
                            {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                            }
                        ]}
                    />
                    </Card>
                </div>
            </div>
            <div className='row align-items-start mt-3'>
                <h4> Breaking News </h4>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                        Ukraine war
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Russia says 'liberation' of Donbas its key priority
                        </CardSubtitle>
                        </CardBody>
                        <img
                        alt="Card image cap"
                        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14C4A/production/_124966058_mediaitem124966056.jpg"
                        width="100%"
                        />
                        <CardBody>
                        <CardText>
                        The "liberation" of eastern Ukraine's Donbas region is an "unconditional priority" for Russia, Foreign Minister Sergei Lavrov has said in an interview.
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md m-1'>
                    <Card>
                        <CardBody>
                        <CardTitle tag="h5">
                            Shanghai lockdown
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Chinese financial hub set to lift curbs on firms
                        </CardSubtitle>
                        </CardBody>
                        <img
                        alt="Card image cap"
                        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14D12/production/_124966258_gettyimages-1240975385.jpg"
                        width="100%"
                        />
                        <CardBody>
                        <CardText>
                        Authorities in Shanghai have announced that some Covid-19 lockdown measures imposed on businesses will be lifted from Wednesday.
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>  
        </div>
      
    </div>
  )
}

export default Home
