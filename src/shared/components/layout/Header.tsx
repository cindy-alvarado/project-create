import React from 'react';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Link,
} from '@material-ui/core';
import logo from '../../images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    constructor(props: any) {
        super(props);

        this.setNavLink = this.setNavLink.bind(this);
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <header className="App-header">
                        <AppBar position="fixed" color="inherit">
                            <Toolbar>
                                <img
                                    src={logo}
                                    className="App-logo"
                                    alt="Project Create Logo"
                                />
                                <Typography color="primary">
                                    <Link
                                        href="#value"
                                        onClick={this.setNavLink}
                                    >
                                        Value
                                    </Link>
                                    <Link
                                        href="#services"
                                        onClick={this.setNavLink}
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        href="#contact"
                                        onClick={this.setNavLink}
                                    >
                                        Contact
                                    </Link>
                                    <Link href="#login">Client Login</Link>
                                </Typography>
                                <IconButton color="primary" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <h1 className="intro-text">PROJECT CREATE.</h1>
                        <Button
                            variant="contained"
                            color="secondary"
                            href="#value"
                            // className={this.props.classes.headerButton}
                            disableElevation
                        >
                            Learn More
                        </Button>
                    </header>
                </Grid>
            </Grid>
        );
    }

    private setNavLink = () => {};
}

export default Header;
