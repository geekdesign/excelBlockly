import './App.css';
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
        <div className="flex h-96">
            <div className="basis-2/3 px-6 py-3" >
                <h2 className="font-semibold" >Concevez votre formule EXCEL de manière visuel</h2>
            </div>
            <div  className="basis-1/3 px-6 py-3" >
                <h2 className="font-semibold" >Rendu de la formule a copier dans Excel</h2>
            </div>
        </div>
    </>
  );
}

export default App;
