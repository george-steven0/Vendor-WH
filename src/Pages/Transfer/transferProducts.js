import classes from '../../assets/styles/transferProducts.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import { Link, useNavigate } from 'react-router-dom'


const TransferProducts = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.transferProducts}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Transfer Products</span>
                    </div>
                </div>

                <div className={classes.notice}>
                    <p>To Continue <br/>scan Bin location of where you are transfering to</p>
                </div>

                    <div className={classes.submitBtn}>
                        <Link to="/Transfer/TransferQuantity">Scan Now</Link>
                    </div>
            </section>
        </>
    );
}
export default TransferProducts;