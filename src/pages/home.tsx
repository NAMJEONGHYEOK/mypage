import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';



export default function Home() {

    const router = useRouter();
    const { data: session,status} = useSession();


  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          home
        </Typography>

        <Typography variant ="body2">
            <p>Signed in as {session?.user?.name}</p>
        </Typography>


            <Button variant="contained" onClick={(e)=>{ 
              e.preventDefault()
              signOut({callbackUrl:'/'})  
              }} >
            Go to the index page
            </Button>
     
      </Box>
    </Container>
  );
}