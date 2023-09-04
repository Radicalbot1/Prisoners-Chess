import React from 'react';
import { ChessBoard } from './ChessBoard';
import ModeToggle from './ModeToggle';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { height } from '@mui/system';

function App() {
  return (
    <CssVarsProvider>
      <Paper sx={{ width: "100vw", height: "100vh" }}>
        <header className="App-header">
          <Box sx={{display: "flex"}}>
            <Typography variant="h2">Prisoners Chess!</Typography>
            <ModeToggle sx={{marginLeft: "auto"}}/>
          </Box>
        </header>
        <body> 
          <ChessBoard />
        </body>
      </Paper>
    </CssVarsProvider>
  );
}

export default App;
