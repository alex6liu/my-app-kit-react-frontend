import React, { Component } from 'react';
import Header from '../../widgets/Header';
import './index.scss';
import { Table, Divider, Tag, Button, Input, Checkbox, Icon, DatePicker } from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { getShoppings, addShopping, handleDeleteAction } from '../../../actions/shoppingcart/getShoppings';

class Shoppingcart extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      currentPrice: null,
      minPrice: null,
      link: '',
      createTime: null,
      defaultDate: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getShoppings());
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleChangeCurrentPrice(e) {
    this.setState({
      currentPrice: e.target.value
    })
  }
  handleChangeMinPrice(e) {
    this.setState({
      minPrice: e.target.value
    })
  }
  handleChangeLink(e) {
    this.setState({
      link: e.target.value
    })
  }

  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch(handleDeleteAction(id));
  }

  handleSubmit(name, currentPrice, minPrice, link, createTime) {
    const { dispatch } = this.props;
    dispatch(addShopping(name, currentPrice, minPrice, link, createTime));

    this.setState({
        name: '',
        currentPrice: null,
        minPrice: null,
        link: '',
        createTime: null,
        defaultDate: null,
      })
  }

  handleChangeCreateTime(date, dateString) {
    this.setState({
      createTime: dateString,
      defaultDate: date,
    })
  }

  render () {
    const columns = [
      {
        title:'Name',
        dataIndex:'name',
        key:'name',
      },
      {
        title:'Currnet Price',
        dataIndex:'currentPrice',
        key:'currentPrice',
      },
      {
        title:'Min Price',
        dataIndex:'minPrice',
        key:'minPrice',
      },
      {
        title:'Link',
        dataIndex:'link',
        key:'link',
      },
      {
        title:'Create Time',
        dataIndex:'createTime',
        key:'createTime',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <React.Fragment>
            <Button type="primary" onClick={() => this.handleChangeCurrentPrice(record._id, record.currentPrice)}>
              change current price
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
      pagination: {
        pageSize: 5,
      },
    };

    const { shoppings } = this.props;
    const { name, currentPrice, minPrice, link, defaultDate, createTime } = this.state;
    return (
      <div className="shopping-cart-page-container">
        <Header/>
        <Table dataSource={shoppings} columns={columns} onChange={this.handleChange} {...tableState}/>
        
        <div className="add-new-shopping">
          <h2>Add new shopping</h2>
          <Input type="text" placeholder="name" onChange={this.handleChangeName.bind(this)} value={name}/>
          <Input type="text" placeholder="current price" onChange={this.handleChangeCurrentPrice.bind(this)} value={currentPrice}/>
          <Input type="text" placeholder="min price" onChange={this.handleChangeMinPrice.bind(this)} value={minPrice}/>
          <Input type="text" placeholder="link" onChange={this.handleChangeLink.bind(this)} value={link}/>
          <DatePicker placeholder="createTime" onChange={this.handleChangeCreateTime.bind(this)} value={defaultDate}/>

          <Button type="primary" onClick={() => this.handleSubmit(name, currentPrice, minPrice, link, createTime)}>Submit</Button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return ({
    shoppings: state.shoppingcartReducer.shoppings,
  });
};

export default connect(mapStateToProps)(Shoppingcart);