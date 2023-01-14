import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Depósitos Recentes</Title>
      <Typography component="p" variant="h4" className='Deposits'>
        R$ 10.352,22
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balanço
        </Link>
      </div>
    </React.Fragment>
  );
}