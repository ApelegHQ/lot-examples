// eslint-disable-next-line no-redeclare
/* global Cypress, describe, it, cy */
import { mount } from 'cypress/vue';
import HelloWorld from '../HelloWorld.vue';

Cypress.Commands.add('mount', mount);

describe('HelloWorld', () => {
	it('playground', () => {
		cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } });
	});

	it('renders properly', () => {
		cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } });
		cy.get('h1').should('contain', 'Hello Cypress');
	});
});
