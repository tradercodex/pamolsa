import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/distributor.css'
import Footer from '../components/Footer';
import DetailSostenibilityId from '../components/DetailCommunity'
import axios from 'axios'

const DetailCommunity = ({ match }) => {

    const id = match.params.name;
    const [community, setCommunity] = useState({
        title: '',
        description: '',
        file: ''
    })

    const getCommunity = async () => {
        const res = await axios.get(`http://3.120.185.254:8090/api/community/find/${id}`)
        setCommunity({
            title: res.data.data.title,
            description: res.data.data.description,
            file: res.data.data.file.url
        })
    }

    useEffect(() => {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')
    
        movilOpen.addEventListener('click',function(){
            header.classList.add('movile-active')
        })
    
        movilClose.addEventListener('click',function(){
            header.classList.remove('movile-active')
        })

        getCommunity();
    }, [id])

    return (
        <Fragment>
            <Header />
            {
                id ?
                    <DetailSostenibilityId
                        title={community.title}
                        description={community.description}
                        file={community.file}
                    /> : ''
            }
            <Footer />
        </Fragment>

    );
}

export default DetailCommunity;