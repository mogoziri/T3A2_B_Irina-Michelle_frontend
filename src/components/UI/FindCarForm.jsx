import React from 'react';
import "../../styles/find-car-form.css";
import { Form, FormGroup } from 'reactstrap';


const FindCarForm = () => {
    return ( 
    <Form className="form-search">
        <div className=' d-flex align-items-center justify-content-between 
        flex-wrap'>
            <FormGroup className='form__group-search-title'>
                <h2 className="search">Search Cars</h2>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <input className="location" 
                type="text" 
                placeholder="Location" required/>
            </FormGroup>

            <FormGroup className='select__group-search'>
                <select>
                    {/* <option value="features">Features</option> */}
                    <option value="transmission">Transmission</option>
                        <option value="transmission">Automatic</option>
                        <option value="transmission">Manual</option>
                    {/* <option value="type">Type</option> */}
                </select>
            </FormGroup>
            
            <FormGroup className='form__group-search'>
                <input className="from" 
                type="date" 
                placeholder="From:" required/>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <input className="to" 
                type="date" 
                placeholder="To:" required/>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <button className="find__car-btn">Search</button>
            </FormGroup>
        </div>
    </Form>
  );
};

export default FindCarForm;

//1:25:52

// import {
//     Box,
//     Button,
//     Container,
//     Grid,
//     Link,
//     TextField,
//     Typography,
//   } from "@mui/material";
//   import React, { useState } from "react";
//   import { Link as RouterLink } from "react-router-dom";
//   import { useAuth } from "../../Authentication/auth-provider";
  
//   const SignUpForm = () => {
//     const { signUp, error } = useAuth();
//   //   const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
    
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       signUp({ username, password, displayName: username });
//     };return (
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//           //   marginBottom: 20,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             marginBottom: 43,
//             marginTop: 10,
//   }
//           }
//         >
//           <Typography variant="h6">Sign Up</Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   name="username"
//                   autoComplete="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Grid>
//             </Grid>
//             {!!error && <Typography>{error}</Typography>}
  
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link to="/login" component={RouterLink} variant="body2">
//                   Already have an account? Login
//                 </Link>
//               </Grid>
//             </Grid>
  
//             <Button
//               type="register"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Register
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     );
//   };
  
//   export default SignUpForm;
  