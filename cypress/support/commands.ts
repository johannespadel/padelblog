/// <reference types="cypress" />

// Custom commands for the blog application

declare global {
  namespace Cypress {
    interface Chainable {
      visitHomePage(): Chainable<Element>
      checkNavigation(): Chainable<Element>
      checkResponsiveDesign(): Chainable<Element>
    }
  }
}

// Visit home page and wait for it to load
Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/')
  cy.get('main').should('be.visible')
})

// Check navigation functionality
Cypress.Commands.add('checkNavigation', () => {
  cy.get('header').should('be.visible')
  cy.get('header').contains('Johannes Padel').should('be.visible')
  cy.get('nav').should('be.visible')
})

// Check responsive design at different breakpoints
Cypress.Commands.add('checkResponsiveDesign', () => {
  // Mobile
  cy.viewport(375, 667)
  cy.get('header').should('be.visible')
  
  // Tablet
  cy.viewport(768, 1024)
  cy.get('header').should('be.visible')
  
  // Desktop
  cy.viewport(1280, 720)
  cy.get('header').should('be.visible')
})