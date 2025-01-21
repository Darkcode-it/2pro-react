import './App.css'
import Menu from "./components/Menu.jsx";
import "./components/style/responsive/Responsive.css"
import Onediv from "./components/Onediv.jsx";
import Articles from "./components/Articles.jsx";
import Twodiv from "./components/Twodiv.jsx";
import There from "./components/There.jsx";
import Footer from "./components/Footer.jsx";
function App() {


  return (
   <div>
<Menu/>
       <Onediv/>
       <Articles/>
       <Twodiv/>
       <There/>
       <Footer/>
       </div>
  )
}

export default App
