import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Input, Checkbox, Icon } from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { getBooks, handleHaveAction, handleReadAction, handleDeleteAction, addBook } from '../../../actions/bookstore/getBooks';

import Header from '../../widgets/Header';
import './index.scss';
import BookTags from '../../widgets/BookTags';

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      author: '',
      have: false,
      read: false,
      normalPrice: '',
      buyPrice: '',
      history: false,
      eco: false,
      cs: false,
      novel: false,
      literature: false,
      searchText: '',
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      loading: false
    }),2000);
    const { dispatch } = this.props;
    dispatch(getBooks());
  }

  componentDidUpdate() {}

  handleHave(id, have) {
    const { dispatch } = this.props;
    dispatch(handleHaveAction(id, have));
  }

  handleRead(id, read) {
    const { dispatch } = this.props;
    dispatch(handleReadAction(id, read));
  }

  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch(handleDeleteAction(id));
  }

  handleSubmit(name, author, have, read, normalPrice, buyPrice) {
    const tags = [];
    if (this.state.history) {
      tags.push('历史')
    }
    if (this.state.eco) {
      tags.push('经济')
    }
    if (this.state.cs) {
      tags.push('计算机')
    }
    if (this.state.novel) {
      tags.push('小说')
    }
    if (this.state.literature) {
      tags.push('文学')
    }

    const { dispatch } = this.props;
    dispatch(addBook(name, author, have, read, normalPrice, buyPrice, tags));

    this.setState({
        name: '',
        author: '',
        have: false,
        read: false,
        normalPrice: '',
        buyPrice: '',
        tags: [],
        history: false,
        eco: false,
        cs: false,
        novel: false,
        literature: false,
      })
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }
  handleChangeHave(e) {
    this.setState({
      have: e.target.checked
    })
  }
  handleChangeRead(e) {
    this.setState({
      read: e.target.checked
    })
  }
  handleChangeNormalPrice(e) {
    this.setState({
      normalPrice: e.target.value
    })
  }
  handleChangeBuyPrice(e) {
    this.setState({
      buyPrice: e.target.value
    })
  }

  handleChangeTags(genre, e ) {
    this.setState({ [genre]: e.target.checked})
  }

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render() {
    const { name, author, have, read, normalPrice, buyPrice, loading } = this.state;
    const { history, eco, cs, novel, literature } = this.state

    const { books, haveHad, haveRead } = this.props;

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: ({
          setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder="Search name"
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
            <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
          </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#108ee9' : '#f50' }} />,
        onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: (text) => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text.split(new RegExp(`(${searchText})`, 'gi')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                  ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
              ))}
            </span>
          ) : text;
        },
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        filterDropdown: ({
          setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder="Search author"
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
            <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
          </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#108ee9' : '#f50' }} />,
        onFilter: (value, record) => record.author.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: (text) => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text.split(new RegExp(`(${searchText})`, 'gi')).map((fragment, i) => (
                fragment.toLowerCase() === searchText.toLowerCase()
                  ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
              ))}
            </span>
          ) : text;
        },
      },
      {
        title: 'Normal Price',
        dataIndex: 'normalPrice',
        key: 'normalPrice',
      },
      {
        title: 'Buy Price',
        dataIndex: 'buyPrice',
        key: 'buyPrice',
      },
      {
        title: 'Have',
        dataIndex: 'have',
        key: 'have',
        render:(have) => (<Checkbox checked={have} />),
      },
      {
        title: 'Read',
        dataIndex: 'read',
        key: 'read',
        render: read => (<Checkbox checked={read} />),
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
          </span>
        ),
        filters: [
          { text: '历史', value: '历史' },
          { text: '经济', value: '经济' },
          { text: '计算机', value: '计算机' },
          { text: '小说', value: '小说' },
          { text: '文学', value: '文学' },
        ],
        onFilter: (value, record) => (record.tags.indexOf(value) !== -1),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <React.Fragment>
            <Button type="primary" onClick={() => this.handleHave(record._id, record.have)}>
              Change Have
            </Button>
            <Divider type="vertical" />
            <Button type="primary" onClick={() => this.handleRead(record._id, record.read)}>
              Change Read
            </Button>
            <Divider type="vertical" />
            <Button type="danger" onClick={() => this.handleDelete(record._id)}>
              Delete
            </Button>
          </React.Fragment>
        ),
      },
    ];

    const tableState = {
      bordered: true,
      loading: loading,
      pagination: {
        pageSize: 5,
      },
    };
    
    return (
      <div className="bookstore_main-container">
        <Header/>
        <Row>
          <Col span={6}>
            <BookTags/>
          </Col>

          <Col span={12}>
            <div className="bookstore_table-container">
              <h1>This is my bookstore</h1>
              <Table dataSource={books} columns={columns} onChange={this.handleChange} {...tableState}/>

              <div className="add-new-book">
                <h2>Add new book</h2>
                <Input type="text" placeholder="book name" onChange={this.handleChangeName.bind(this)} value={name}/>
                <Input type="text" placeholder="author" onChange={this.handleChangeAuthor.bind(this)} value={author}/>
                <Input type="text" placeholder="normal price" onChange={this.handleChangeNormalPrice.bind(this)} value={normalPrice}/>
                <Input type="text" placeholder="buy price" onChange={this.handleChangeBuyPrice.bind(this)} value={buyPrice}/>
                <div className="checkbox-container">
                  <Checkbox onChange={this.handleChangeHave.bind(this)} checked={have}>Have</Checkbox>
                  <Checkbox onChange={this.handleChangeRead.bind(this)} checked={read}>Read</Checkbox>
                </div>
                <div className="genre-container">
                  <h3>选择书籍的类别</h3>
                  <Checkbox onChange={this.handleChangeTags.bind(this, 'history')} checked={history}>历史</Checkbox>
                  <Checkbox onChange={this.handleChangeTags.bind(this, 'eco')} checked={eco}>经济</Checkbox>
                  <Checkbox onChange={this.handleChangeTags.bind(this, 'cs')} checked={cs}>计算机</Checkbox>
                  <Checkbox onChange={this.handleChangeTags.bind(this, 'novel')} checked={novel}>小说</Checkbox>
                  <Checkbox onChange={this.handleChangeTags.bind(this, 'literature')} checked={literature}>文学</Checkbox>
                </div>

                <Button type="primary" onClick={() => this.handleSubmit(name, author, have, read, normalPrice, buyPrice)}>Submit</Button>
              </div>
            </div>
          </Col>

          <Col span={6}>
            <div className="have-read-count">
              <h3>This is have and read count</h3>
              <Tag color="#f50">Have: {haveHad}</Tag>
              <Tag color="#2db7f5">Read: {haveRead}</Tag>
            </div>
          </Col>
        </Row>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    books: state.getBooks.books,
    haveHad: state.haveReadCount.have,
    haveRead: state.haveReadCount.read,
  });
};

export default connect(mapStateToProps)(Bookstore);