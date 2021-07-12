
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout'
import GlobalStyles from './Styles/GlobalStyles';




function App() {
  return (
   
    <Router>
      <Layout />
      <GlobalStyles />
      <Switch>
      </Switch>   
    </Router>
  );
}

export default App;