import React, {Component} from 'react';
import CartUI from './CartUI';
import {Data} from '../../../types/types';
import {connect} from 'react-redux';

type Props = {
  product: Data;
};

const mapStateToProps = (state: any) => {
  return {
    product: state.data.data,
  };
};

class Cart extends Component<Props> {
  render() {
    return <CartUI />;
  }
}

export default connect(mapStateToProps)(Cart);
