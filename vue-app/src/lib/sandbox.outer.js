import browserSandbox from '@apeleghq/lot/browser-worker';

export default (signal) => {
	const url = new URL('./sandbox.inner.cjs', import.meta.url);

	return fetch(url, {
		headers: [['accept', 'text/javascript']],
		signal,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Unexpected status code: ' + response.status);
			}
			return response.text();
		})
		.then((text) => browserSandbox(text, null, null, signal))
		.then((sandbox) => sandbox('vocative'));
};
