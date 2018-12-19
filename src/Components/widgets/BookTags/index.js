import React, { Component } from 'react';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import { getBookTags } from '../../../actions/bookstore/getBookTags';

import './index.scss';

class BookTags extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getBookTags());
    }

    render() {
        const { history, eco, cs, novel, literture } = this.props;

        return (
            <div className="book-tags-container">
                <h3>This is tags map</h3>
                <div className="book-tags">
                    <Tag color="#f50">历史: {history}</Tag>
                    <Tag color="#2db7f5">经济: {eco}</Tag>
                    <Tag color="#87d068">计算机: {cs}</Tag>
                    <Tag color="#108ee9">小说: {novel}</Tag>
                    <Tag color="gold">文学: {literture}</Tag>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        history: state.getBookTags.history,
        eco: state.getBookTags.eco,
        cs: state.getBookTags.cs,
        novel: state.getBookTags.novel,
        literture: state.getBookTags.literture,
    };
};

export default connect(mapStateToProps)(BookTags);