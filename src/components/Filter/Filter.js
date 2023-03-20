import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/filterSlice';
import { selectFilters } from 'redux/selectors';
import { Input } from '@chakra-ui/react';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = event => {
    dispatch(setFilterAction(event.target.value));
  };

  return (
    <>
      <p className={css.find}>Find contacts by name</p>
      <Input
        {...InputStyle}
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
        placeholder="search..."
      ></Input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
