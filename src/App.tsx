import './App.css';
import { getCodeFromUrl } from './auth/spotify-login';
import DashBoard from './pages/dashboard';
import Home from './pages/home';

const code: string | null = getCodeFromUrl();

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center">
        {code ? <DashBoard code={code} /> : <Home />}
      </div>
    </>
  );
}

export default App;
