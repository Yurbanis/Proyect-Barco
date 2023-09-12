
import './App.css';
import Table from "./component/table";
import Game from "./component/game";
import Boats from "./component/boats";

function App() {
  return (
    <div className="text-center mt-2">
    
    <h1>BattleShip</h1>

    <div className="row">

      <div className="col-md-6">
        <h2>Player 1</h2>
        <Table></Table>
      </div>

      <div className="col-md-6">
        <h2>Player 2</h2>
        <Table></Table>
      </div>

    </div>
   

    <p>
      <div>
        <div className="row">
          <div className="col-md-6">
           <Game></Game>
          </div>

          <div className="col-md-6">
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
