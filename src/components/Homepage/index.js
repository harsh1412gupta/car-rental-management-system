import React from 'react'
//components of Homepage
import FrontImage from './imagesDisplay/image'
import LocationImage from './imagesDisplay/locations'
import DriverImage from './imagesDisplay/driverImage/index'
import InvestorImage from './imagesDisplay/investorImage/index'
import AllImagesText from './ImagesText/allImagesText'
import NavbarFooter1 from './navbarFooter/navbarFooter'
import Cards from './cards/offerCards'
// import Bookingbar from '../Booking/bookingbarr'
import Bookingbar from '../Booking/bookingbar'

import Deals from './cards/deals copy'
import Vehicales from './cards/vehicales'
import Payment from '../payment/payment'

export default () => {

    let text = {
        DriverTitle: 'Be a Driver',
        DriverText: 'Make great money by driving on schedule & make as much as you can on monthly basis. Only drives when it works for you. There is no office & no boss because you’re in charge with our service.',
        LocationTitle: 'Our Locations',
        LocationText: 'We are providing our transport services for tourism in almost all the Northern areas of Pakistan with famous destinations like Hunza (Gilgit), Skardu City, Naran Kaghan, Kalam (Swat) & Chitral',
        InvestorTitle: 'Be a Host',
        InvestorText:'Earn some extra cash by sharing your vehicle in our platform when you’re not using it. Listing the vehicle is very simple & takes less than 10 minutes. Earning will be 65% to 85% of the trip’s price.'
    }

    

    return (
        <>
            <Bookingbar />
            {/* <Payment /> */}
            <FrontImage />
            <section style={{backgroundColor:'#fd7014'}}>
            <Deals />
            <Vehicales />
            </section>
            <section style={{backgroundColor:'#202021'}}>
            {/* <DriverImage /> */}
            <InvestorImage />
            </section>
            <LocationImage />
            <NavbarFooter1 />
        </>
    )
}