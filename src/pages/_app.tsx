import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainLayout from '../layouts/main';
import '../styles/global.scss';
import { useStore } from '../store';

function App({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);
	const router = useRouter();
	return (
		<Provider store={store}>
			<CssBaseline />
			<MainLayout>
				<Component {...pageProps} router={router} />
			</MainLayout>
		</Provider>
	);
}

export default App;
