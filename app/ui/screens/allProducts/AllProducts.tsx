import React, {Component} from 'react';
import AllProductsUI from './AllProductsUI';
import {connect} from 'react-redux';
import {Data} from '../../../types/types';

type Props = {
  data: Array<Data>;
};

const mapStateToProps = (state: any) => {
  return {
    data: state.data.data,
  };
};
class AllProducts extends Component<Props> {
  render() {
    return <AllProductsUI data={this.props.data} />;
  }
}

export default connect(mapStateToProps)(AllProducts);
