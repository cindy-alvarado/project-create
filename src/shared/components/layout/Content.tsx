import { Grid } from '@material-ui/core';
import React from 'react';
import Home from '../../../components/Home/Home';

const Content = () => (
    <Grid container>
        <Grid item xs={12} sm={12} md={12}>
            <Home></Home>
        </Grid>
    </Grid>
);

export default Content;
