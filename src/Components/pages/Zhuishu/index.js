import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Table } from 'antd';
import Header from '../../widgets/Header';
import { Link } from 'react-router-dom';
import { getZhuishu } from '../../../actions/zhuishu/zhuishuAction';

class Zhuishu extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
        };
    }

    handleOnChange(e) {
        if (!e.target.value) {
          this.setState({searchText: ''})
        } else {
          this.setState({searchText: e.target.value})
        }
    }

    handleSearch(searchText) {
        const { dispatch } = this.props
        dispatch(getZhuishu(searchText))
        this.setState({searchText: ''})
    }

    onTitleClick(title) {
    
    }

    onAuthorClick(author) {

    }

    onCatClick(cat) {

    }

    render() {
        const { searchText } = this.state;
        const { books } = this.props;

        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                render: (text, record) => (<Link to={`/zhuishu/${record._id}`}>{record.title}</Link>),
            },
            {
                title: 'Author',
                dataIndex: 'author',
                key: 'author',
                render: (text, record) => (<Link to="/">{record.author}</Link>),
            },
            {
                title: 'Category',
                dataIndex: 'cat',
                key: 'cat',
                render: (text, record) => (<Link to="/" >{record.cat}</Link>),
            },
            {
                title: 'Last Chapter',
                dataIndex: 'lastChapter',
                key: 'lastChapter',
            },
            {
                title: 'Introduction',
                dataIndex: 'shortIntro',
                key: 'shortIntro',
            },
        ];

        return (
            <div>
                <Header />
                <div className="zhuishu-container">
                    <h1>小说查询</h1>
                    <div className="search-container">
                        <Input
                            placeholder="输入要查询的书"
                            enterButton="Search"
                            size="large"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.searchText}
                        />
                        <Button type="primary" onClick={() => this.handleSearch(searchText)}>Search</Button>
                    </div>
                    <div className="results-container">
                        {
                            books ?
                            <Table columns={columns} dataSource={books} bordered/>
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {

    return ({
        books: state.getZhuishuReducer.results.books,
    });
}

export default connect(mapStateToProps)(Zhuishu);