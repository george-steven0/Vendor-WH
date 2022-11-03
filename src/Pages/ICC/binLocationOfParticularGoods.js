import classes from '../../assets/styles/binLocationParticularGood.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import { Link, useNavigate } from 'react-router-dom'

const BinLocationParticularGood = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.particularGood}>
                <div className={classes.topheader}>

                    <div className={classes.prevIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt='Previous Page' /></button>
                    </div>

                    <div className={classes.title}>
                        <div>
                            <span>324</span>
                        </div>
                        <div>
                            <span>Total Nails inventory</span> <br/>
                            <span>1-May-2022</span> <br/>
                        </div>
                    </div>

                </div>

                <div className={classes.currentStock}>
                    <div>
                        <label>
                            Current Stock
                        </label>

                        <input type='text' placeholder='What you counted' />
                    </div>
                </div>

                <div className={classes.submitBtn}>
                    <Link to="/ICC/InventorySummry">Done</Link>
                </div>
            </section>
        </>
    );
}

export default BinLocationParticularGood;