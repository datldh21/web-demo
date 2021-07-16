import '././SignUp.css'
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: {width: '20rem', height: '22rem'}
  }
  
  export default function SignUp() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Box class="box-signin">  
          <Box borderRadius={16} {...defaultProps}>
           
            <h1 class="colorHomePage">Sign Up</h1>  
  
            <form class="form-username">
              <TextField id="outlined-basic" label="Username"
                  variant="outlined" />
            </form>
  
            <br></br>
  
            <form class="form-password">
              <TextField id="outlined-password-input" 
              label="Password"
              type="password"
              variant="outlined" />
            </form>
  
            <br></br>
            
            <div class="pos-button">
              <Router>
                <Link to="/signup">
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Link>
  
                <br></br>
                
              </Router>
            </div>
  
            <h3 class="forgetpass">
              <a href="/signin" color="#2356e2">Do you have account?</a>
            </h3>
  
          </Box>
        </Box>
      </div>
    );
  }