import Nav from "./assets/components/Nav"
import Apropos from "./assets/pages/Apropos"
import Contact from "./assets/pages/Contact"
import Header from "./assets/pages/Header"
import Home from "./assets/pages/Home"
import Livrables from "./assets/pages/Livrables"
import Services from "./assets/pages/Services"


function App() {
  

  return (
    <div className="app-container">
      <Nav />
      <Header />
      <Home />
      <Livrables />
      <Services />
      <Apropos />
      <Contact />
    </div>
  )
}

export default App
