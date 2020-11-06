import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header'
import Slicks from '../components/Slicks';
import News from '../components/News'
import Footer from '../components/Footer';
import InformationWork from '../components/InformationWork';
import { getVacants } from '../redux/actions/vacant'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'

const WorkWithUs = () => {

    const vacants = useSelector(state => state.vacants.vacants)
    const dispatch = useDispatch();

    useEffect(() => {

        $('.accordion > li > .box-informs').hide();

        $('.accordion > li').click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".box-informs").slideUp();
            } else {
                $(".accordion > li.active .box-informs").slideUp();
                $(".accordion > li.active").removeClass("active");
                $(this).addClass("active").find(".box-informs").slideDown();
            }
            return false;
        });


        dispatch(getVacants(3, 1));
    }, [])

    return (
        <Fragment>
            <Header />
            <Slicks />
            <InformationWork />
            <News vacants={vacants} />
            <Footer />
        </Fragment>
    );
}

export default WorkWithUs;