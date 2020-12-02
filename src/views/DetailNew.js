import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import '../styles/distributor.css'
import Footer from '../components/Footer';
import DetailNewId from '../components/DetailNew'
import { useDispatch, useSelector } from 'react-redux'
import { getNewId } from '../redux/actions/new'

const DetailNew = ({ match }) => {

    const id = match.params.name;
    const newId = useSelector(state => state.news.new)
    const dispatch = useDispatch();

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

        dispatch(getNewId(id))
    }, [id])

    return (
        <Fragment>
            <Header />
            {
                newId ?
                    <DetailNewId
                        title={newId.title}
                        body={newId.body}
                        created={newId.created}
                        place={newId.place}
                        author={newId.author}
                        source={newId.source}
                        file={newId.file.url}
                    /> : ''
            }
            <Footer />
        </Fragment>

    );
}

export default DetailNew;