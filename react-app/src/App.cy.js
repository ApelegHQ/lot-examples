import { mount } from 'cypress/react18'
import React from 'react'
import App from './App.js'

Cypress.Commands.add('mount', mount)

describe('<App /> ', () => {
	it('renders and shows "Hello, Sandbox!"', () => {
		cy.mount(<App />)

		cy.get('.App-header').contains('Hello, Sandbox!')
	})
})
