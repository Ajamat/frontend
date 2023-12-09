import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import {  ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router';




function Create() {

  const [category,setcategory] =  useState([]);
  const navigate = useNavigate();
useEffect(() => {
  const getData=()=>{
    axios.get(`http://localhost:4000/api/category`,{})
    .then((res)=>{
      setcategory(res.data.category)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  getData()
  
}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post('http://localhost:4000/api/product', data)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error:', error);
      });
      navigate('/')
  }
  const categories = category?.map((cat) => {
    return {
      value: cat._id,
      label: cat.name,
    }
  })
  console.log(categories)

  const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className='border px-6 rounded-sm'
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>


                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    // autoComplete="name"
                  />
                </Grid>
                <Grid item xs={24}>
                  <TextField
                    className='w-full'
                    id="category"
                    name='category'
                    select
                    label="Category"
                    defaultValue="EUR"
                  // helperText="Please select your currency this feisdf thisdfsd asdfasdfasd"
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="des"
                    label="des"
                    type="des"
                    id="des"
                    // autoComplete="new-descrition"
                  />
                </Grid>
                <Grid item xs={12} className=''>
                  <TextField
                    className='pl-28'
                    required
                    fullWidth
                    name="file"
                    label="file"
                    type="file"
                    id="file"
                    accept="image/*"
                    // autoComplete="new-url"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="price"
                    label="Price"
                    type="price"
                    id="price"
                    // autoComplete="new-price"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Create;

