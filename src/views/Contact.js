import React, { Fragment } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
    return ( 
        <Fragment>
            <Header />
            <Slicks />
            <ContactForm />
            <Footer />
        </Fragment>
     );
}
 
export default Contact;