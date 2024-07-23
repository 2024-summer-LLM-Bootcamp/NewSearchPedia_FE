import React, { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function ArticleSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
    setShowClearIcon(value !== '');
  };

  const handleClear = () => {
    setSearchValue('');
    setShowClearIcon(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        size="small"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {showClearIcon && (
                <IconButton onClick={handleClear} edge="end">
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default ArticleSearch;
