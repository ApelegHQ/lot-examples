import { defineConfig } from 'cypress';

export default defineConfig({
	component: {
		supportFile: false,
		devServer: {
			framework: 'create-react-app',
			bundler: 'webpack',
		},
	},
});
