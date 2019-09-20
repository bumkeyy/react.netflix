import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
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
              <span key={movie.id}>{movie.title}</span>
            ))}
            >
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title='TV Shows Results'>
            {tvResults.map(tv => (
              <span key={tv.id}>{tv.title}</span>
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
