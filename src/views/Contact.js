import React, { Fragment } from 'react';
import Header from '../components/Header';
import Slicks from '../components/Slicks';
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return ( 
        <Fragment>
            <Header />
            <Slicks />
            <ContactForm />
        </Fragment>
     );
}
 
export default Contact;