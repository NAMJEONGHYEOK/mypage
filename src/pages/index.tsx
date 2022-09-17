import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>

          Next.js + redux toolkit + MUI v5 + typescript   example
        
        </Typography>
      
        {/* <Link href={"/signin"}  > */}
          <Button variant="contained" onClick={() => signIn()}>
            Go to the signin page
          </Button>
        {/* </Link> */}
    
        
      </Box>
    </Container>
  );
};

export default Home;