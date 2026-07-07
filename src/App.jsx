import PasswordInput from './components/PasswordInput';
import SubmitButton from './components/SubmitButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Secure Password Entry</h1>
      <p>Anti-bot monitoring enabled.</p>
      
      <form>
        <PasswordInput />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;