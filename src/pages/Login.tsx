import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/Store';
import { fetchUser } from '../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    dispatch(
      fetchUser({ username: username as string, password: password as string }),
    );
  };
  return (
    <Container
      maxWidth="xs"
      component="section"
    >
      <Box className="flex flex-col items-center mt-10">
        <Avatar
          className="mb-5 "
          style={{ backgroundColor: 'red' }}
        >
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
        >
          Sign in
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
            id="username"
            label="username"
            name="username"
            autoComplete="username"
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
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-3 mb-2"
          >
            Sign In
          </Button>
          <Grid
            container
            className="mt-2"
          >
            <Grid
              item
              xs
            >
              <Link
                href="#"
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
