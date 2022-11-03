import classes from '../../assets/styles/PCLInfo.module.css'
import prevArrow from '../../assets/imgs/outline_arrow_back_ios_new_black_18pt_1x 4.png'
import QRLogo from '../../assets/imgs/qrCodeLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { QrReader } from 'react-qr-reader';
import { useEffect, useState } from 'react';


const PCLInfo = () => {

    const navigate = useNavigate()

    return ( 
        <>
            <section className={classes.PCLInfo}>
                <div className={classes.topHeader}>
                    <div className={classes.arrowIcon}>
                        <button onClick={(e)=>{e.preventDefault();navigate(-1)}}><img src={prevArrow} alt="Previous Page" /></button>
                    </div>

                    <div className={classes.title}>
                        <span>Pallet & case labelling</span>
                    </div>
                </div>

                <div className={classes.productDetails}>
                    <div className={classes.detailsContent}>
                        <p>Area</p>
                        <p>Line c Row ab</p>
                        <p style={{marginBottom : "15px"}}>Order Details</p>

                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>
                        <span>Lorem, ipsum dolor sit amet. </span>

                    </div>

                    <div className={classes.areaDetails}>
                        <p>QR Code</p>
                        <p> <img src={QRLogo} alt=" QR Code" /></p>
                        <p>Expirary Date</p>
                        <p>1-june-2024</p>
                    </div>
                </div>

                    <div className={classes.scanProduct}>
                        <button onClick={()=>{navigate('/')}}>
                            Print
                        </button>
                    </div>

            </section>
        </>
    );
}

export default PCLInfo;