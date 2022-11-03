import classes from '../../assets/styles/transferQantity.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import { Link, useNavigate } from 'react-router-dom'

const TransferQuantity = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.TransferQuantity}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>azs Nails</span> <br/>
                    </div>

                    <div className={classes.notice}>
                        <span>Scan the log number on the product to confirm</span>
                    </div>
                </div>

                <div className={classes.transferQuantityContent}>
                    <div className={classes.contentTitle}>
                        <h3>Transfer</h3>
                    </div>

                    <div className={classes.contentData}>
                        <label>
                            How many nails are you transferring?
                        </label>

                        <div>
                            <input type='text' placeholder='Input quantity of transfer' />
                        </div>

                        <div className={classes.submitBtn}>
                            <Link to="/Transfer/TransferedAprroval">Confirm</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default TransferQuantity;