import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useState } from "react";
import Typography from "@mui/material/Typography";
const TextFieldComponent = () => {
  const [err, setErr] = useState(false);
  console.log(setErr);
  return (
    <Container sx={{ mt: 4 }} maxWidth="md">
      <Typography variant="h2" mt={2} color={"secondary.dark"} align="center">
        Text Field
      </Typography>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        required
        fullWidth
        margin="normal"
        error={err}
        helperText={err && "Incorrect Email Format"}
      />
      <TextField
        id="password"
        label="Password"
        variant="filled"
        placeholder="Enter your password"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        variant="standard"
        placeholder="Enter your name"
        required
        fullWidth
        margin="normal"
        color="secondary"
      />
    </Container>
  );
};

export default TextFieldComponent;
