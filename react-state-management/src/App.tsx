import TaskManager from './components/TaskManager';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <TaskManager />
    </ThemeProvider>
  );
}

export default App;