import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import { useSelector,useDispatch} from 'react-redux';
import {up} from '../store/slices/counterSlice';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';




export default function Home() {

    const router = useRouter();
    const { data: session,status} = useSession();
    const count = useAppSelector((state ) => state.counter);
    const dispatch = useAppDispatch();
    console.log("count" , count);
    

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


              <div>
              <p>{count.countvalue}</p>
              <button onClick={()=>{
                dispatch(up(2));
              }}>+</button>
            </div>

      </Box>
    </Container>
  );
}

function retrun(arg0: JSX.Element) {
  throw new Error('Function not implemented.');
}
