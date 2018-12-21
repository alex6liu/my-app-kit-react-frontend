import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../widgets/Header';
import Breadcrumbs from '../../widgets/Breadcrumbs';

class DoubanWrapper extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumbs />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanWrapper);