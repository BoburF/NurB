import { Layout } from "./hoc/Layout";
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
