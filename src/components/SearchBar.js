import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
    <Paper 
      component="form"
      elevation={0}
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: '2rem',
        pl: '1rem',
      }}>
      <input type="text" placeholder="Search..." style={{fontSize: "1rem"}} onChange={() => {
        console.log('changed')
      }}/>
      <IconButton type='submit' sx={{marginRight: ".5rem"}}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar