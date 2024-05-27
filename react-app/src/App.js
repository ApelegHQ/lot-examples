import browserSandbox from '@exact-realty/lot/browser-worker';
import { React, useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import url from './sandbox.outer.js';

function App() {
	const [result, setResult] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, {
			headers: [['accept', 'text/javascript']],
			signal: abortController.signal,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						'Unexpected status code: ' + response.status,
					);
				}
				return response.text();
			})
			.then((text) =>
				browserSandbox(text, null, null, abortController.signal),
			)
			.then((sandbox) => sandbox('vocative'))
			.then((v) => setResult(`Hello, ${v}!`))
			.catch((e) => {
				console.error('Sandbox init error', e);
				setResult(new Error(`Error: ${e?.message || e}`, { cause: e }));
			});

		return () => abortController.abort();
	}, [url]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{result === null ? (
						<em>Pending...</em>
					) : result instanceof Error ? (
						<strong className="sandbox-error">
							{result.message}
						</strong>
					) : (
						<strong className="sandbox-success">{result}</strong>
					)}
				</p>
			</header>
		</div>
	);
}

export default App;
