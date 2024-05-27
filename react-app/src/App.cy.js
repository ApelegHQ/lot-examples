// eslint-disable-next-line no-redeclare
/* global Cypress, cy, describe, it */
import { mount } from 'cypress/react18';
import React from 'react';
import App from './App.js';

Cypress.Commands.add('mount', mount);

describe('<App /> ', () => {
	it('renders and shows "Hello, Sandbox!"', () => {
		cy.mount(<App />);

		cy.get('strong.sandbox-success').contains('Hello, Sandbox!');
	});
});
