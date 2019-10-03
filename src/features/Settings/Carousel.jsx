import React from 'react';
import cx from 'classnames';
import DraggableList from 'react-draggable-list';
import { Switch, Button, Dropdown, Icon, Menu } from 'antd';
import { navigate } from '@reach/router';

import client from '../../app/config/apollo';
import { query } from './graphql';
import { IMAGE_HOST } from '../../app/config/constants';
import gql from 'graphql-tag';

class PlanetItem extends React.Component {
  state = {
    value: 0,
  };

  _inc() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  getDragHeight() {
    return this.props.item.subtitle ? 47 : 28;
  }

  render() {
    const { item, itemSelected, dragHandleProps } = this.props;
    const { value } = this.state;
    const scale = itemSelected * 0.05 + 1;
    const shadow = itemSelected * 15 + 1;
    const dragged = itemSelected !== 0;

    const onChange = async show => {
      await client.mutate({
        mutation: gql`
          mutation($show: Boolean!, $id: ID!) {
            updateCarousel(data: { show: $show }, where: { id: $id }) {
              show
            }
          }
        `,
        variables: {
          show,
          id: item.id,
        },
      });
    };

    const EditCarousel = () => navigate('/carousel/edit-carousel');

    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={EditCarousel}>
          <Icon type="edit" />
          Edit Carousel
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="delete" /> Delete
        </Menu.Item>
      </Menu>
    );

    return (
      <div
        className={cx('item', { dragged })}
        style={{
          transform: `scale(${scale})`,
          boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`,
          backgroundColor: 'white',
        }}
      >
        <div className="dragHandle" {...dragHandleProps}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              src={IMAGE_HOST + item.image}
              width={250}
              height={150}
              alt="Carousel Item"
            />
            <div style={{ margin: '40px 120px 0px 0px' }}>
              <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                  Quick Actions <Icon type="down" />
                </a>
              </Dropdown>
              <br />
              <br />
              <Switch defaultChecked={item.show} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default class Example extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    client
      .query({
        query: query.carousels,
      })
      .then(res => {
        this.setState({
          list: res.data.carousels,
        });
        console.log(res.data.carousels);
      })
      .catch(error => {
        console.log(error);
      });
  }

  _onListChange(newList) {
    this.setState({ list: newList });
  }

  render() {
    return (
      <div className="main">
        <div style={{ margin: '0 5px 20px 0', textAlign: 'right' }}>
          <Button
            type="primary"
            onClick={() => navigate('/carousel/add-new-carousel')}
          >
            Add New Carousel
          </Button>
        </div>
        <DraggableList
          itemKey="image"
          template={PlanetItem}
          list={this.state.list}
          onMoveEnd={newList => this._onListChange(newList)}
        />
      </div>
    );
  }
}
