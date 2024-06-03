import { useEffect } from 'react';
import { Fragment} from 'react';
import {Box, styled} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import { getProducts } from '../../redux/actions/productActions.js';

const Component = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2
`
function Home(){
    const {products} = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products = {products} title = "Deal of the Day" timer = {true} />
                <MidSection />
                <Slide products = {products} title = "Discounts for You" timer = {false} />
                <Slide products = {products} title = "Suggested Items" timer = {false} />
                <Slide products = {products} title = "Top Selection" timer = {false} />
                <Slide products = {products} title = "Trending Offers" timer = {false} />
            </Component>
        </Fragment>
    )
}

export default Home;