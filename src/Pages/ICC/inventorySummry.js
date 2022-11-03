import classes from '../../assets/styles/inventorySummury.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import history from '../../assets/imgs/history.svg'

import { Link, useNavigate } from 'react-router-dom'
import OrderCard from '../../Components/OrderCard/orderCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

const InventorySummry = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <div>
                            <span>Inventory Adjustment Summary</span>
                        </div>
                    </div>

                </div>

                <div className={classes.detailsHeader}>
                    <div>
                        <span>324</span>
                        <span>Nails</span>
                        <p>total present</p>
                    </div>

                    <div>
                        <span>300</span>
                        <span>Nails</span>
                        <p>total Counted</p>
                    </div>

                    <div>
                        <span>24</span>
                        <span>Nails</span>
                        <p>Difference</p>
                    </div>
                </div>

                <div className={classes.transHistory}>
                    <div className={classes.historyCont}>
                        <img src={history} alt="History" />
                        <button>
                            Transaction History
                            <span><FontAwesomeIcon icon={faCircleChevronDown} /></span>
                        </button>

                    </div>

                    <div>
                        <a href='#'>View all</a>
                    </div>
                </div>

                <div className={classes.historyCard}>
                    <OrderCard scan={false} date='1-5-2022' />
                    <OrderCard scan={false} date='1-5-2022' />
                </div>

                <div className={classes.submitBtn}>
                    <Link to="/ICC/SnapShot">Next</Link>
                </div>
            </section>
        </>
    );
}

export default InventorySummry;