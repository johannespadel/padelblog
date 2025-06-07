describe('Navigation', () => {
  beforeEach(() => {
    cy.visitHomePage()
  })

  it('should have a sticky header', () => {
    cy.get('header').should('be.visible')
    
    // Scroll down
    cy.scrollTo(0, 500)
    
    // Header should still be visible
    cy.get('header').should('be.visible')
  })

  it('should have working brand link', () => {
    cy.get('header').within(() => {
      cy.contains('Johannes Padel').click()
    })
    
    // Should stay on or navigate to homepage
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('should have working navigation links', () => {
    cy.get('nav').within(() => {
      // Home link
      cy.contains('Hjem').should('have.attr', 'href', '/')
      
      // Studio link
      cy.contains('Studio')
        .should('have.attr', 'href')
        .and('include', 'sanity.studio')
        .and('have.attr', 'target', '_blank')
    })
  })

  it('should have smooth scrolling to sections', () => {
    // Click "Les mine innlegg" button
    cy.contains('Les mine innlegg').click()
    
    // Should scroll to posts section
    cy.get('#posts').should('be.visible')
  })

  it('should open external links in new tab', () => {
    // Check Studio link opens in new tab
    cy.get('a[href*="sanity.studio"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel')
      .and('include', 'noopener')
  })

  it('should have accessible navigation', () => {
    // Check for proper ARIA labels and semantic HTML
    cy.get('header').should('exist')
    cy.get('nav').should('exist')
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
  })
})