import classes from './ordercard.module.css'
import pipes from '../../assets/imgs/pipes.png'
import lightScan from '../../assets/imgs/lightScan.png'
import { Link } from 'react-router-dom'


const TransferOrderCard = (props) => {
    return ( 
        <>
            <Link className={classes.orderLink} to="/Transfer/TransferDetails">
                <section className={classes.card}>

                    <div className={classes.cardImg}>
                        <img src={pipes} alt= "Object" />
                    </div>

                    <div className={classes.cardBody}>
                        <h4>Iron Pipe</h4>
                        <p>24 quantity lorem ipsum lorem ipsum lorem ipsum </p>
                    </div>

                    <div className={classes.cardIcons}>
                        {
                            props.scan ? 
                                <div>
                                    <img src={lightScan} alt= "Scan" />
                                </div> : null
                        }

                        {
                            props.count ? 
                                <div className={classes.cardCounter}>
                                    <span>{props.count}</span>
                                </div> : null
                        }

                        {
                            props.date ? 
                                <div className={classes.date}>
                                    <span>{props.date}</span>
                                </div> : null
                        }
                    </div>
                </section>
            </Link>
        </>
    );
}

export default TransferOrderCard;