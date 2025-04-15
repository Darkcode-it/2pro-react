import Header from "../components/header/Header";
import Articles from "../components/Articles/Articles";
import Twodiv from "../components/discription/Twodiv";
import There from "../components/searchbox/There";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import data from '../components/menu/Menu.json';


const Home = () => {
    return (
        <div>
            <Menu data={data} />
            <Header />
            <Articles />
            <Twodiv />
            <There />
            <Footer />
        </div>
    )
}
export default Home;