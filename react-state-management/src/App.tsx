// app/src/App.tsx
import TaskManager from './components/TaskManager';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import './App.css';
import './index.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme }`}>
      <Navbar />
      <TaskManager />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <TaskManager />
    </ThemeProvider>
  );
}

export default App;