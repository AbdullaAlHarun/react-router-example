import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;