import logo from './logo.svg';
import './App.css';
import Particle from './components/Particle';
import Phone from './components/Phone';

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const App = () => (
  <div style={styles.root}>

    <Particle />
    <Phone/>
    
  </div>
);

export default App;
