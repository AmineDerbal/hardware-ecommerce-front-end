import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';

const Register = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    });
  };
  return (
    <Container maxWidth="xs">
      <Box className="flex flex-col items-center mt-10">
        <Typography
          component="h1"
          variant="h5"
          className="self-start font-bold"
        >
          Create Your Account
        </Typography>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-1 py-2 px-6 shadow-md"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-3 mb-2"
          >
            {' '}
            Create account
          </Button>
        </form>
        <Box className="mt-2 flex justify-end w-full">
          <Link href="/Login">Already have an account? Sign In</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
