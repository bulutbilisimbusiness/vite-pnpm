//import { Typography } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
const Typo = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid tomato",
        }}
      >
        <Typography variant="h5" component="h1" color="darkblue" mt={4}>
          MUI Typo
        </Typography>
        <Typography variant="button" color="darkgred">
          MUI Typo
        </Typography>
        <Typography variant="body1" color="darkgray">
          MUI Typo
        </Typography>
        <Typography variant="subtitle2" color="darkgreen">
          MUI Typo
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "blue", backgroundColor: "palevioletred", mt: "1rem" }}
          align="center"
        >
          Button text
        </Typography>
        <Typography variant="h2" mt={2} color={"koyuTuruncu.light"}>
          button text
        </Typography>
        <Typography variant="h2" mt={2} color={"koyuTuruncu.main"}>
          button text
        </Typography>
        <Typography variant="h2" mt={2} color={"koyuTuruncu.dark"}>
          button text
        </Typography>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        mt={4}
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="outlined">Click</Button>
        <Button variant="contained" color="primary">
          Click
        </Button>
        <Button variant="contained" color="secondary">
          Click
        </Button>
        <Button variant="contained" color="koyuTuruncu">
          Click
        </Button>
        <Button variant="contained" color="warning">
          Click
        </Button>
        <Button variant="contained" color="error">
          Click
        </Button>
        <Button
          variant="contained"
          sx={{ color: "error.dark", backgroundColor: "warning.light" }}
        >
          Click
        </Button>
      </Stack>
    </Container>
  );
};

export default Typo;
