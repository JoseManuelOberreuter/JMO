import './App.css';
import   {
  ContainerHeader,
  LogoJmo,
  MainPost,
  MainPostSecondary

} from './Componentes'

function App() {
  return (
    <div className="App">
      <ContainerHeader />

      <MainPost />
      <MainPostSecondary />

      <LogoJmo />
    </div>
  );
}

export default App;
