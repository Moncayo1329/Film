import './App.css';
import Pics from './filmpictures';
import DarkModeToggle from './darkmode';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
<Helmet>
        <meta property="og:image" content="https://filmbymike.vercel.app/logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Taking photos with my film camera" />
      </Helmet>


      <Pics/> 
      <DarkModeToggle />
    </div>
  );
}

export default App;
