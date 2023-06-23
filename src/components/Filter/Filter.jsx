import { nanoid } from '@reduxjs/toolkit';
import { useDispatch} from 'react-redux';
import { setNewFilter } from 'redux/filterSlice';
import { FilterComponent, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const changeFilter = e => {
    let newQuery = e.target.value.trim();
    dispatch(setNewFilter(newQuery));
  };
  
  return (
    <FilterComponent>
      <FilterLabel>Filter</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
    </FilterComponent>
  );
};

// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import css from './Filter.module.css';

// const filterInputId = nanoid();

// export const Filter = ({ onChange, filter }) => {
//   return (
//     <div className={css.wrap}>
//       <label htmlFor={filterInputId}>Filter</label>
//       <input
//         id={filterInputId}
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={onChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
