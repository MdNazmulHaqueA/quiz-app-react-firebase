import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    //  do validation
    if (password !== confirmPassword) {
      setError("Password Doesn't Match!");
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      navigate('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to create an account.');
    }
  };
  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        required
        icon="lock"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        icon="lock_clock"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        text="I agree to the Term &amp; Conditions"
        required
        value={agree}
        onChange={e => setAgree(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Form>
  );
}
