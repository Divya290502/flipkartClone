import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { styled, Box, Typography, Grid } from '@mui/material';

import {getProductDetails} from '../../redux/actions/productActions.js';
import ActionItem from './ActionItems.jsx';
import ProductDetail from './ProductDetail.jsx';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

function DetailView(){
    

    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading, product} = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if(product && id !== product.id){
            dispatch(getProductDetails(id))
        }}, [dispatch, id, loading, product]);
    return (
        <Component>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product}/>
                    </RightContainer>
                </Container>
            }   
        </Component>
    )
}

export default DetailView;