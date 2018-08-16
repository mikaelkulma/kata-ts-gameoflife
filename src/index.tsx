import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './main/components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
