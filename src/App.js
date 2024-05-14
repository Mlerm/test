import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom'
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Body} from "./layout/Body";

function App(){
return(

      <div>
      <Header />
      <Body />
      <Footer />
    </div>
    );
  }

  export default App;