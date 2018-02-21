import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from "react-redux";
import store from './store/store'

console.log("Console de dev, pas de folie ici ! =D ")

const Theme = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Theme />, document.getElementById('root'));
registerServiceWorker();
