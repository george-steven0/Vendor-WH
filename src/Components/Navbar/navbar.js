import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './navbar.module.css'
import profile from '../../assets/imgs/user.png'

const Navbar = () => {
    return ( 
        <>
            <section className={classes.navbar}>

                <div className={classes.navbarContent}>
                    <div className={classes.navIcon}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <div className={classes.profile}>
                        <img src={profile} alt='User Profile Img' />
                        <p>Andrew Jay</p>
                    </div>
                </div>

            </section>
        </>
     );
}
 
export default Navbar;