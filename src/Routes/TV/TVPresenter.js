import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | NetFlix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title='Top Rated Shows'>
            {topRated.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title='Popular Shows'>
            {popular.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title='Airing Today'>
            {airingToday.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color='#e74c3c' />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
