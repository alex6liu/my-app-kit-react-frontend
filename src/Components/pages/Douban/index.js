import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../widgets/Header';
import Breadcrumbs from '../../widgets/Breadcrumbs';
import routes from '../../../routes';
import DoubanBook from './DoubanBook';
import DoubanMusic from './DoubanMusic';
import DoubanMovie from './DoubanMovie';

const DoubanWrapper =  () => {

    return (
        <div className="douban-wrapper">
            <Header />
            <Breadcrumbs />
        </div>
    );
}

export default DoubanWrapper;