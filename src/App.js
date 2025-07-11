import './App.css';
import Pics from './filmpictures';
import DarkModeToggle from './darkmode';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
<Helmet>
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="film by Mike"></meta>
        <meta property="og:description" content="Taking film photos with my camera"></meta>
        <meta property="og:image" content="https://filmbymike.vercel.app/logo.png" />
       <meta property="og:type" content="website"></meta>
       <meta property="og:url" content="https://filmbymike.vercel.app"></meta>
      </Helmet>


      <Pics/> 
      <DarkModeToggle />
    </div>
  );
}

export default App;
