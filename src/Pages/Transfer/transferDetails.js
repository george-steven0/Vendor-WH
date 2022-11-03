import classes from '../../assets/styles/transferDetails.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import { Link, useNavigate } from 'react-router-dom'

const TransferDetails = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.transferDetailsCont}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Transfer Products</span>
                    </div>
                </div>

                <div className={classes.transferInfo}>
                    <div className={classes.detailsContent}>
                        <p>Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                    </div>

                    <div className={classes.areaDetails}>
                        <p>Bin Location <br/> <span>12000AB</span></p>
                        <p>Area <br/> <span>Line c Row B</span></p>
                    </div>
                </div>

                <div className={classes.description}>
                    <p>
                        To Transfer Go to the Location Bin you are transfering from and scan
                    </p>
                </div>

                <div className={classes.scanBtn}>
                    <Link to="/Scans/ScanLogNumber">Scan Now</Link>
                </div>
            </section>
        </>
    );
}
export default TransferDetails;