
import './App.css';
import Table from "./component/table";
import Game from "./component/game";
import Boats from "./component/boats";

function App() {
  return (
    <div className="text-center mt-2">
    
    <h1>BattleShip</h1>
    <div>
    <Table></Table>
    </div>
    <p>
      <div>
        <div className="row">
          <div className="col">
          <Game></Game>
          </div>
          <div className="col">
          <Boats></Boats>
          </div>
        </div>
      </div>
      
    </p>
  </div>
  );
}

export default App;
