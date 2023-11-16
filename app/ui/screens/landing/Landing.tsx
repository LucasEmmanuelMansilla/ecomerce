import {NavigationProp} from '@react-navigation/native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import LandingUI from './LandingUI';
import {getData} from '../../../redux/slices/DataSlice';
import {Data} from '../../../types/types';

type Props = {
  getData: ({}) => void;
  data: Data[];
};

const mapStateToProps = (state: any) => {
  return {
    data: state.data.data,
  };
};

const mapDispatchToProps = {
  getData,
};
class Landing extends Component<Props> {
  async componentDidMount() {
    await this.props.getData({});
  }
  render() {
    return <LandingUI data={this.props.data} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
