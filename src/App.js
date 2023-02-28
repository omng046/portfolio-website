import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Animatedroutes from "./components/Animatedroutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Animatedroutes />
      </BrowserRouter>
    </>
  );
}
export default App;

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// {
/* <Route exact path='/'>
    <Home/>
      </Route>

      <Route  path='/education'>
    <Education/>
      </Route>

      <Route  path='/skill'>
    <Skill/>
      </Route>

      <Route  path='/contact'>
    <Contact/>
      </Route> */
// }
