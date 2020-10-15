import React, { Fragment } from 'react';

// Layout Components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

const App = () => (
    <Fragment>
        <Header />
        <Content />
        <Footer />
    </Fragment>
);

export default App;
