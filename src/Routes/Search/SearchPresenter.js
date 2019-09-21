import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  updateTerm,
  handleSubmit,
  error
}) => (
  <Container>
    <Helmet>
      <title>Search | NetFlix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='Search Movies or TV Shows...'
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title='Movie Results'>
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imgUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
            >
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title='TV Shows Results'>
            {tvResults.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
              />
            ))}
            >
          </Section>
        )}
      </>
    )}
    {error && <Message text={error} color='#e74c3c' />}
    {tvResults &&
      movieResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && (
        <Message text='Nothing found' color='#95a5a6' />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  updateTerm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SearchPresenter;
