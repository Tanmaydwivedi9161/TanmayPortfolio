import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Banner from './components/Banner/Banner'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ProjectSection from './components/Projects/Project'
import SkillsSection from './components/Skills/Skills'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <AboutUs/>
    <SkillsSection/>
    <ProjectSection/>
    <Contact/>
  <Footer/>
    </>
  )
}

export default App
