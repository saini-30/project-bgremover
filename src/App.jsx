import './index.css'

import Navbar from './component/nav/Navbar.jsx'
import Bg from './component/bg/Bg.jsx'
import About from './component/about/about.jsx'
import End from "./components/end/End";


function App() {
  return (
   <div>
 <Navbar />
<div>
<Bg />
</div>
<div>
  <About />
  <div>
    <End />

  </div>
</div>
</div>
   
 
  );
}

export default App;
