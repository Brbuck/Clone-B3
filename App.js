import './App.css';
//import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Overview from './pages/Overview';
//import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
//import Team from './pages/Team';
//import Header from './components/Header';
//import Menu from './components/Menu';
//import Teste from './components/Teste';

//import Menu from './components/Header/Menu'
//import Curso, { Graduacao, Mba, Mestrado, PosGraduacao } from './pages/Cursos';
//import Sobre, {NossaHistoria, Unidades, Sustentabilidade, TrabalheConosco} from './pages/Sobre';
//import Servico, { Biblioteca, Carreiras, ColacaoDeGrau, EducacaoInclusiva, Eventos } from './pages/Servicos';
import Layout from './components/Layout'
import GlobalStyles from './Styles/GlobalStyles';




function App() {
  return (
   
    <Router>
      <Layout />
      <GlobalStyles />
      <Switch>
        {/*<Route path='/cursos' exact component={Curso} />*/}
       { /*<Route path='/cursos/graduacao' exact component={Graduacao} />*/}
       {/* <Route path='/cursos/posGraduacao' exact component={PosGraduacao} /> */}
        {/*<Route path='/cursos/mba' exact component={Mba} />*/}
        {/*<Route path='/cursos/mestrado' exact component={Mestrado} />*/}
        {/*<Route path='/sobre' exact component={Sobre} />*/}
        {/*<Route path='/sobre/nossaHistoria' exact component={NossaHistoria} />*/}
        {/*<Route path='/sobre/unidades' exact component={Unidades} />
        <Route path='/sobre/sustentabilidade' exact component={Sustentabilidade} />
        <Route path='/sobre/trabalheConosco' exact component={TrabalheConosco} />
        <Route path='/servicos' exact component={Servico} />
        <Route path='/servicos/biblioteca' exact component={Biblioteca} />
        <Route path='/servicos/carreiras' exact component={Carreiras} />
        <Route path='/servicos/colacaoDeGrau' exact component={ColacaoDeGrau} />
        <Route path='/servicos/eventos' exact component={Eventos} />
        <Route path='/servicos/educacaoInclusiva' exact component={EducacaoInclusiva} />*/}
      </Switch>   
    </Router>
  );
}

export default App;