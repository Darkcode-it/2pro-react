import Header from "../components/header/Header";
import Articles from "../components/Articles/Articles";
import Twodiv from "../components/discription/Twodiv";
import There from "../components/searchbox/There";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import data from '../components/menu/Menu.json';
import onediv from "../components/census/Onediv"
import Onediv from "../components/census/Onediv";

const Home = () => {
    return (
        <div>
            <Menu data={data} />
            <Header />
            <Onediv/>
            <Articles />
            <Twodiv />
            <There />
            <Footer />
        </div>
    )
}
export default Home;