import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contato() {
  return (
    <div>
    <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <TextField
        helperText="Por favor digite seu nome"
        id="demo-helper-text-misaligned"
        label="Nome"
      />

    </Box>
    <Box>
        <TextField
        type='email'
        helperText="Por favor digite seu nome"
        id="demo-helper-text-misaligned"
        label="Nome"
      />

    </Box>
    </div>
  );
}