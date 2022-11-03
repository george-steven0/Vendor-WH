import classes from '../../assets/styles/transferedApproval.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import confirm from '../../assets/imgs/confirm.svg'
import { Link, useNavigate } from 'react-router-dom'

const TransferedAprroval = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.transferedAprroval}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Transferred </span>
                        <img src={confirm} alt="Confirmed" /> 
                    </div>

                    {/* <div className={classes.scanIcon}>
                        <button><img src={ScanIcon} alt="Scan Icon" /></button>
                    </div> */}
                </div>

                <div className={classes.itemDetailsContainer}>
                    <div className={classes.itemInfo}>
                        <span>
                            The item with log number 1203ab has been transferred from Bin Location 11230aa to 223422dd
                        </span>
                    </div>
                </div>

                <div className={classes.itemQuantity}>
                    <span>Quantity</span>
                    <span>40</span>
                </div>

                <div className={classes.submitBtn}>
                    <Link to="/">Done</Link>
                </div>
            </section>
        </>
    );
}
export default TransferedAprroval;