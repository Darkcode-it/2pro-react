// import './App.css'
// import Menu from "./components/menu/Menu.jsx";
// import "./components/style/responsive/Responsive.css"
// import Onediv from "./components/census/Onediv.jsx";
// import Articles from "./components/Articles/Articles.jsx";
// import Twodiv from "./components/Twodiv.jsx";
// import There from "./components/There.jsx";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/header/Header.jsx";
// function App() {


//   return (
//    <div>
// <Menu/>
// <Header/>
//        <Onediv/>
//          <Articles/>
//        {/* <Twodiv/>
//        <There/>
//        <Footer/>  */}
//        </div>
//   )
// }

// export default App



import './App.css';
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Onediv from "./components/census/Onediv";
import Articles from "./components/Articles/Articles";
import Twodiv from "./components/discription/Twodiv";
import There from "./searchbox/There";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Onediv />
      <Articles />
      <Twodiv/>
      <There/>
      <Footer/>

    </div>
  );
}

export default App;