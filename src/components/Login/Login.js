import './Login.css';
import app from '../../base';

const Login = ({ history }) => {
  const handleLogin = async(event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      history.push('/home');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form
      className="login"
      onSubmit={event => handleLogin(event)}
    >
      <h2 className="login__title">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="login__email"
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="login__password"
        name="password"
      />
      <button
        type="submit"
        className="login__submit"
      >
        Login
      </button>
      <a
        className="login__register"
        onClick={() => history.push('/register')}
      >
        Don’t have an account yet? Register
      </a>
    </form>
  )
};

export default Login;