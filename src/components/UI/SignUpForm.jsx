import {
  Box,
  Button,
  Container,
  Alert,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../Authentication/auth-provider";

const SignUpForm = () => {
  const { signUp, error } = useAuth();
//   const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    signUp({ username, password, displayName: username });
  };return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
        //   marginBottom: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 43,
          marginTop: 10,
}
        }
      >
        <Typography variant="h6">Sign Up</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>

          {!!error && <Alert severity="error">{error}</Alert>}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" component={RouterLink} variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>

          <Button
            type="register"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;


// import React, { useState } from "react";
// // import { Link as RouterLink } from "react-router-dom";

// import { useAuth } from "../../Authentication/auth-provider";
// // import { AuthProvider } from "react-auth-kit";
// import { Link } from 'react-router-dom';

// import { Typography } from "@mui/material";

// import '../../styles/sign-up.css'
// import { Form, FormGroup } from 'reactstrap';

// const SignUpForm = () => {
//     // const { signUp }= useAuth();
//     const { signUp, error }= useAuth();
//     // const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
    
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       signUp({ username, password, displayName: username });
//     };

//   return (
//         <Form className="SignUp" noValidate onSubmit={handleSubmit}>
//             <div className=' d-flex align-items-center justify-content-between
//             flex-wrap'>
//                 <FormGroup className='form__group-sign-title'>
//                     <h2 className="search">Sign Up</h2>
//                 </FormGroup>
    
//                 <FormGroup className='form__group'>
//                     <input className="username" 
//                     type="text" 
//                     placeholder="Username*" required
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}/>
//                      <input className="password" 
//                     type="text" 
//                     placeholder="Password*" required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}/>
//                 </FormGroup>

//                 {!!error && <Typography>{error}</Typography>}

//                 <FormGroup className='form__group-statement'>
//                     <Link to='/login'className="already__user">Already a member? Log In </Link>
//                 </FormGroup>
    
//                 <FormGroup className='form__group'>
//                     <button className="log__in-btn">Register</button>
//                 </FormGroup>
//             </div>
//         </Form>
//       );
// }

// export default SignUpForm