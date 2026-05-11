import Nav from "./assets/components/Nav"
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
    </div>
  )
}

export default App
