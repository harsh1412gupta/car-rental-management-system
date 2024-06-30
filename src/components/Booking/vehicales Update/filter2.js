import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import option from '@material-ui/core/option';
import FormControl from '@material-ui/core/FormControl';
import {Select , InputLabel , MenuItem} from '@material-ui/core';

//icon
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    outline: 'none'
  }
}));

export default function SimpleNativeSelect({vehicleTypeList , vehicle , setvehicle}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setvehicle(event.target.value);
  };

  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'0rem .5rem 1.2rem .5rem' , marginBottom:'1rem'}}>
        <h6 style={{marginTop:'1rem' , marginRight:'1rem'}}><FilterListIcon style={{marginRight:'.2rem' , fontSize:'2rem'}} />FILTER BY:</h6>
      <FormControl className={classes.formControl}>
      {/* <InputLabel id="demo-simple-select-label111">Vehicle Type</InputLabel> */}
        <Select
          labelId="demo-simple-select-label111"
          value={vehicle}
          displayEmpty
          onChange={handleChange}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
          placeholder="Vehicle Type"
        >
          <MenuItem value=''><em>All Vehicles</em></MenuItem>
          <MenuItem value='Car'>Car</MenuItem>
          <MenuItem value='Jeep'>Jeeps</MenuItem>
          <MenuItem value='Pickup'>Pickup</MenuItem>
          {/* {
            vehicleTypeList.map(item =>{
              return <option style={{padding:'.5rem 1rem'}} key={item.product_ID} value={item.product_NAME}>{item.product_NAME}</option>
            })
          } */}
        </Select>
      </FormControl>
    </div>
  );
}
