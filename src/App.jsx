import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  // Task: Track typing in password input
  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    console.log('Password input changed:', newValue);
    // Security engineer can later analyze typing cadence here
  };

  // Task: Mouse enters the button
  const handleMouseEnter = () => {
    console.log('Mouse entered Submit button');
    // Security can track hover timing here
  };

  // Task: Mouse leaves the button
  const handleMouseLeave = () => {
    console.log('Mouse left Submit button');
    // Security can track movement patterns here
  };

  // Optional: Handle form submission (good practice)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked - Password:', password);
    // In a real app you would send this to your backend
  };

  return (
    <div className="app">
      <h1>Secure Password Entry</h1>
      <p>Monitoring typing cadence and mouse movement for anti-bot protection.</p>

      <form onSubmit={handleSubmit}>
        {/* Required: Password Input */}
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Required: Submit Button with hover events */}
        <button
          type="submit"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit Password
        </button>
      </form>
    </div>
  );
}

export default App;