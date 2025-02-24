import './index.css'

import About from './component/about/about.jsx'
import Bg from './component/bg/Bg.jsx'
import End from "./component/end/end.jsx"
import Navbar from "./component/nav/Navbar.jsx"

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
