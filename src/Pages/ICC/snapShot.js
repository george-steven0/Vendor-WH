import classes from '../../assets/styles/snap.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import snapLogo from '../../assets/imgs/snap.svg'
import { Link, useNavigate } from 'react-router-dom'


const Snap = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.snap}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <div>
                            <span>Snap Bin Location</span>
                        </div>
                    </div>

                </div>

                <div className={classes.snapContent}>
                    <div className={classes.snapLogo}>
                        <img src={snapLogo} alt="SnapShot" />
                    </div>

                    <div className={classes.submitBtn}>
                        <Link to="/ICC/InventoryUpdate">Snap</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Snap;