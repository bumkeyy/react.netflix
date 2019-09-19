import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailPresenter = ({ resultloading, error }) => null;

DetailPresenter.PropTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.stringㄷ
};

export default DetailPresenter;
