import Home from '../components/home/Home'
import AboutMe from '../components/aboutme/AboutMe'
import {infoEmpresa} from '../data/data'
import Catalogue from '../components/catalogue/Catalogue'

function Views() {
  return (
    <>
      <div>
         <Home />
         <AboutMe infoEmpresa={infoEmpresa}/>
         <Catalogue />
      </div>
    </>
  )
}

export default Views