import React from 'react';
import Grid from '@material-ui/core/Grid';
import valueImage from '../../shared/images/create-more.jpg';

const Home = () => (
    <React.Fragment>
        <section id="value" className="home home-value">
            <Grid container spacing={4}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className="home home-value home-value-heading"
                >
                    <h2>Value</h2>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className="home home-value home-value-content"
                >
                    <p>
                        At Project Create we're all about collaborating with you
                        to create your online business.
                    </p>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        src={valueImage}
                        alt="Create More"
                        className="home home-value home-value-img"
                    />
                </Grid>
            </Grid>
        </section>
        <section id="services" className="home home-services">
            <Grid container spacing={4}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className="home home-services home-services-heading"
                >
                    <h2>Serivces</h2>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className="home home-services home-services-content"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className="home home-services home-services-img"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Grid>
            </Grid>
        </section>
    </React.Fragment>
);

export default Home;
