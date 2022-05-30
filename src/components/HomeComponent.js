import React from 'react'
import Aboutme from './Aboutme'
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import Gallery from './PhotoGallery'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Homepage'
function HomeComponent() {
    const HomePage = () => {
        return <Home/>
    }
    const AboutmePage = () => {
        return <Aboutme />
    }
    const GalleryPage = () => {
        return <Gallery />
    }
  return (
    <div>
        <Header/>
        <div>
            <Switch>
                <Route exact path='/home' component={HomePage}/>
                <Route path='/aboutme' component={AboutmePage}/>
                <Route path='/gallery' component={GalleryPage}/>
            </Switch>
          </div>
        <Footer />
    </div>
  )
}

export default HomeComponent
