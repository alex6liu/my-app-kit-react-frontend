import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../../widgets/Header';
import Breadcrumbs from '../../../widgets/Breadcrumbs';
import DoubanWrapper from '../index';

class DoubanMusic extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumbs />
                music
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanMusic)