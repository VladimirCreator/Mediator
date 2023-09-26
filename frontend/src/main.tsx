import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App.tsx';

const root: HTMLFormElement = document.getElementById('root') as HTMLFormElement;

ReactDOM
    .createRoot(root)
    .render(
        <React.StrictMode
            children={
                <App />
            }
        />
    );
