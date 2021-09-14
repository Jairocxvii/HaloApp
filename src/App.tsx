//import logo from './logo.svg';
import Layout from "./components/layout"
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import MetadaMenu from "./pages/MetadaMenu";
import Campaign from "./pages/Campaign";
import About from "./pages/About";
function App() {
  return (
    //se remplazar el BrowserRouter por HashRouter para poder usar la redireccion en gitpages
    <div className=" bg-ligth-blue-background h-full">
      <HashRouter basename='/'>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/MetadaMenu' component={MetadaMenu} />
            <Route exact path='/Campaign' component={Campaign} />
            <Route exact path='/Aboutme' component={About} />

          </Switch>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
