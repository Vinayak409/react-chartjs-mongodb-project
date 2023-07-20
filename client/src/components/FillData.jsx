import { useState } from "react";

import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material"

import { addData } from "../service/api";
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`;

const defaultValue ={
  month: '',
  number_of_posts: 0
}

const GetData = () => {

  const [chartData, setChartData] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setChartData({...chartData, [e.target.name]: e.target.value})
  }

  const addDataDetails = async () => {
    await addData(chartData);
    // navigate('/allusers');
  }
  
  return (
    <Container>
      <Typography variant="h4">Add Data</Typography>
      <FormControl>
        <InputLabel>Month</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="month"/>
      </FormControl>
      <FormControl>
        <InputLabel>Number of posts</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="number_of_posts"/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=>addDataDetails()}>Add Data</Button>
      </FormControl>
    </Container>
  )
}

export default GetData
