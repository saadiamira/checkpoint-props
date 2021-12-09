
import './App.css';
import Bio from './profile/Bio';
import Fullname from './profile/Fullname';
import Profession from './profile/Profession';

function App() {
  return (
    <div className="app">
    
 <img className="pct" 
     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XKZ4N3I3NF7gWUiB4gSRwAHaK8%26pid%3DApi&f=1" alt=""
      />
     <Fullname name="amira saadi"/>
     < Profession profession="student in Go My Code"/>
    <Bio bio="change is the end result of all true learning"/>
    
     
      </div>
  );
}

export default App;
