
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "./components/context/ThemeContext";
import "./components/styles/global.css"
import "./components/styles/variables.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
);
