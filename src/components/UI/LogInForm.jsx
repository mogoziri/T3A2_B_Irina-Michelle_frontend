import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import { useAuth } from "../../Authentication/auth-provider";
  
  const LogInForm = () => {
    const { logIn, error } = useAuth();
  //   const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      logIn({ username, password, displayName: username });
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
          <Typography variant="h6">Welcome Back! Sign In</Typography>

          
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
  
            <Button
              type="register"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>

            {!!error && <Typography>{error}</Typography>}
            
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default LogInForm;


// ----------------------------------------------------------------

// import React, { useState } from "react";
// // import { Link as RouterLink } from "react-router-dom";
// import { Typography } from "@mui/material";
// import { useAuth } from "../../Authentication/auth-provider";
// // import { AuthProvider } from "react-auth-kit";

// import '../../styles/sign-up.css'
// import { Form, FormGroup } from 'reactstrap';

// const LogInForm = () => {
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
//         <Form className="LogIn" noValidate onSubmit={handleSubmit}>
//             <div className=' d-flex align-items-center justify-content-between
//             flex-wrap'>
//                 <FormGroup className='form__group-sign-title'>
//                     <h2 className="search">Log In</h2>
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
    
//                 <FormGroup className='form__group'>
//                     <button className="log__in-btn">Submit</button>
//                 </FormGroup>
//             </div>
//         </Form>
//       );
// }

// export default LogInForm


