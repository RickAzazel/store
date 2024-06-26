import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import './assets/styles/index.scss';

import { store } from "./features/store";

import App from "./components/App/App";

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter basename="/store">
			<App />
		</BrowserRouter>
	</Provider>
);