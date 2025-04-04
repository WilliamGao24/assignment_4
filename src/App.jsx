import './App.css'
import AmbiguousCase from './Components/AmbiguousCase.jsx'
import HeronsFormula from './Components/HeronsFormula.jsx'
import NewtonsMethod from './Components/NewtonsMethod.jsx'
import PolynomialFunction from './Components/PolynomialFunction.jsx'

function App() {
  return (
    <div className="App">
      <h1>Math Calculator</h1>
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
}

export default App