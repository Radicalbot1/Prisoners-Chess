import React from 'react';

import ChessBoard from './ChessBoard';
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
          <Box sx={{display: "flex"}}>
            <Container sx={{ width: "1vw", height: "50vh" }}></Container>
            <Typography variant="h5" sx={{ width: "23vw", height: "50vh" }}>You and a friend must communicate a spot on a chess board by flipping one coin. The board is randomized, and your friend cannot see the board before the coin is flipped.</Typography>
            <Container sx={{ width: "1vw", height: "50vh" }}></Container>
            <ChessBoard height={window.screen.height / 2} width={window.screen.width / 2}/>
            <Container sx={{ width: "1vw", height: "50vh" }}></Container>
            <Typography variant="h5" sx={{ width: "23vw", height: "50vh" }}>I am the great and mighty zote, here to be a placeholder. Counters for wins and attempts will be tracked here, along with coin "skins".</Typography>
            <Container sx={{ width: "1vw", height: "50vh" }}></Container>
          </Box>
        </body>
      </Paper>
    </CssVarsProvider>
  );
}

export default App;
