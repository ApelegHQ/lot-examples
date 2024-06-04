import { React, useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import vocative from './sandbox.outer.js';

function App() {
	const [result, setResult] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		vocative(abortController.signal)
			.then((v) => setResult(`Hello, ${v}!`))
			.catch((e) => {
				console.error('Sandbox init error', e);
				setResult(new Error(`Error: ${e?.message || e}`, { cause: e }));
			});

		return () => abortController.abort();
	}, [vocative]);

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
