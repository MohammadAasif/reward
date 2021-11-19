/*import './App.css';
import './style/appStyle.css';
import Body from './components/BodyComponent';
import Header from './components/HeaderComponent';
import Pagination from './components/PaginationComponent';
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {

  const duplicateData=[
    {
      id: 1,
      rewardType: "Birthday",
      assignee: "Raymond Tech. Pvt. Ltd.",
      rewardDate: "12/02/2020",
    },
    {
      id: 2,
      rewardType: "Vimal K",
      assignee: "Vimal & Co",
      rewardDate: "12/02/2020",
    },
    {
      id: 3,
      rewardType: "Harsha Bendi",
      assignee: "Bend Solutions",
      rewardDate: "12/02/2020",
    },
    {
      id: 4,
      rewardType: "Employee",
      assignee: "Assignee Dummy A",
      rewardDate: "12/02/2020",
    },
    {
      id: 5,
      rewardType: "Reward Type Dummy",
      assignee: "Not Decided",
      rewardDate: "12/02/2020",
    },
    {
      id: 6,
      rewardType: "Best HR",
      assignee: "Dummy C",
      rewardDate: "12/02/2020",
    },
  ]

  const[data,updateData]=useState(duplicateData);

  const getSearchData = (e) => {
    const value=e.target.value;
    const updated=duplicateData.filter((d)=>{
      if(d.rewardType.search(value)===-1){
        return false;
      }
      return d;
    })
    updateData(updated);
  }
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/rewards" element={<Body/>} />
    //   </Routes>
    // </Router>

    <div className="wrapper">
      <Header getSearchData={getSearchData} />
      <Body data={data} />
      <Pagination />
    </div>
  );
}

export default App;*/
import './App.css';
import { FormLabel } from '@mui/material';
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


class App extends React.Component {
 
  render() {
    
    return (
      <Grid  item padding="2">
    

        <FormLabel
           children="New Reward"
           
          />
          <br/>
          <hr/>

        <FormLabel
           children="Reward Name"
          />
          <br/>
          <TextField
            id="outlined-name"
            label="Monthly Star at Valuebound"
           
            style = {{width: 700}}
          />
          <br/>
          <FormLabel
           children="Reward Display Name"
           
          />
          <br/>
            <TextField
            id="outlined-name"
            label="Monthly Star at Valuebound"
            style = {{width: 700}}
          />
         <br/>
         <FormLabel
           children="Reward Type"
           
          />
          <br/>
          
                <FormControl id="RType">

                    <InputLabel id="Demo" >General</InputLabel >
                    <Select justify="justify" style = {{width: 700}} >
                        <MenuItem>Star Of the Month</MenuItem>
                        <MenuItem>Food Voucher</MenuItem>
                        <MenuItem>Membership Reward</MenuItem>
                    </Select>
                </FormControl>
            
          <br/>
           <FormLabel
           children="Reward Sender"
           
          />
          <br/>
      
                <FormControl id="RSender">

                    <InputLabel id="Message Type" >Message</InputLabel >
                    <Select style = {{width: 700}} >
                        <MenuItem>Personal</MenuItem>
                        <MenuItem>Private</MenuItem>
                    </Select>
                </FormControl>
  
          <br/>
          <FormLabel
           children="Recepients"
           
          />
          <br/>
          <TextField
            id="outlined-name"
            label="-Selected"
            style = {{width: 700}}
          />   &nbsp;
          <Button variant="contained" color="secondary" margin="right" >
            Edit
          </Button>
          <br/>
          <FormLabel
           children="Reciver Message"
           
          />
          <br/>
          <TextField
              placeholder="congratulations Recever for a grate sales cycle"
               multiline
               style = {{width: 700}}
               rows={3}
              rowsMax={4}
            />
          <br/>
          <FormLabel
           children="Announcement Type"
           
          />
          <br/>
                <FormControl id="Atype">

                    <InputLabel id="Pdemo" >Public</InputLabel >
                    <Select style = {{width: 700}} >
                        <MenuItem>Public</MenuItem>
                        <MenuItem>Private</MenuItem>
                    </Select>
                </FormControl>
  
          <br/>

          <FormLabel
           children="Slack Channel"
           
          />
          <br/>
          <TextField
            id="outlined-name"
            label="#demospolight"
            style = {{width: 700}}
          />
          <br/>
          <FormLabel
           children="Channel Message"
           
          />
          <br/>
          <TextField
              placeholder="Please Join Us"
               multiline
               style = {{width: 700}}
               rows={2}
              rowsMax={3}
            />
          <br/>
          <br/>
        
          <Button variant="contained" color="primary" margin="15px">
            Save
          </Button>
          &nbsp;
          <Button  variant="contained" color="error" margin="5" >
            Cancel
          </Button>
        
        </Grid>
    );
  }
}
export default App;

