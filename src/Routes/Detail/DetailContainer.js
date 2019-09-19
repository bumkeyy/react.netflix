import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/')
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }
    let result = null;
    try {
      if (this.isMovie) {
        const request = await movieApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.tvDetail(parsedId);
        result = request.data;
      }
    } catch (error) {
      this.setState({
        error: "Can't find anything."
      });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
