import Navbar from "../Components/Navbar/navbar";
import classes from '../assets/styles/main.module.css'
import Home from "./home";

const Main = () => {
    return ( 
        <>
            <section className={classes.home}>
                <div className={classes.navbar}>
                    <Navbar />
                </div>
                <Home />
            </section>
        </>
     );
}
 
export default Main;