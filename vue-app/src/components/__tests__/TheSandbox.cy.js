// eslint-disable-next-line no-redeclare
/* global Cypress, describe, it, cy */
import { mount } from 'cypress/vue';
import TheSandbox from '../TheSandbox.vue';

Cypress.Commands.add('mount', mount);

describe('TheSandbox', () => {
	it('playground', () => {
		cy.mount(TheSandbox);
	});

	it('renders properly', () => {
		cy.mount(TheSandbox);
		cy.get('strong.sandbox-success').should('contain', 'Hello, Sandbox!');
	});
});
