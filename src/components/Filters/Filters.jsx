import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { getAllCategories } from 'api/productsListApi';
import { FiltersWrap } from './Filters.styled';

const recommendationOptions = ['All', 'Recommended', 'Not recommended'];

const CustomSelect = ({ label, id, value, onChange, options }) => (
  <FormControl
    sx={{
      '.MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.8)',
        '&.Mui-focused': {
          color: '#E6533C',
        },
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
        borderRadius: '12px',
      },
      '.MuiOutlinedInput-input': {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
      },
      '.MuiSelect-icon': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(239, 237, 232, 0.30)',
      },
    }}
  >
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <Select
      labelId={`${id}-label`}
      id={id}
      value={value}
      label={label}
      onChange={onChange}
      IconComponent={KeyboardArrowDownIcon}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        PaperProps: {
          style: {
            maxHeight: 276,
            maxWidth: 164,
            marginTop: 2,
            borderRadius: 12,
            background: '#1C1C1C',
            color: 'rgba(255, 255, 255, 0.8)',
          },
        },
      }}
      sx={{
        width: 194,
        height: 52,
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(239, 237, 232, 0.30)',
          },
        },
      }}
    >
      {options.map(item => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const Filters = () => {
  const [category, setCategory] = React.useState('');
  const [recommendation, setRecommendation] = React.useState('All');
  const [inputValue, setInputValue] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleRecommendationChange = event => {
    setRecommendation(event.target.value);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <FiltersWrap>
      <TextField
        placeholder="Search"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        sx={{
          '.MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.8)',
            '&.Mui-focused': {
              color: '#E6533C',
            },
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(239, 237, 232, 0.30)',
            borderRadius: '12px',
          },
          '.MuiOutlinedInput-root': {
            color: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            '&:hover fieldset': {
              borderColor: 'rgba(239, 237, 232, 0.30)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E6533C',
            },
          },
          '& .MuiInputAdornment-root': {
            color: 'rgba(239, 237, 232, 0.30)',
          },
        }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {inputValue && (
                <IconButton
                  edge="end"
                  onClick={handleClearInput}
                  sx={{ color: '#E6533C' }}
                >
                  <ClearIcon />
                </IconButton>
              )}
              <InputAdornment position="end">
                <SearchIcon sx={{ color: 'rgba(239, 237, 232, 0.30)' }} />
              </InputAdornment>
            </InputAdornment>
          ),
          style: {
            height: 52,
            width: 236,
          },
        }}
      />

      <CustomSelect
        label="Category"
        id="category-select"
        value={category}
        onChange={handleCategoryChange}
        options={categories}
      />
      <CustomSelect
        id="recommendation-select"
        value={recommendation}
        onChange={handleRecommendationChange}
        options={recommendationOptions}
      />
    </FiltersWrap>
  );
};

export default Filters;
