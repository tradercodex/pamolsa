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