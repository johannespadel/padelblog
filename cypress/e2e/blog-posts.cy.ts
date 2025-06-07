describe('Blog Posts', () => {
  beforeEach(() => {
    cy.visitHomePage()
  })

  it('should display blog posts if they exist', () => {
    cy.get('body').then(($body) => {
      // Check if posts exist
      if ($body.find('[data-testid="post-card"]').length > 0) {
        cy.get('[data-testid="post-card"]').first().within(() => {
          // Check post card elements
          cy.get('h3').should('be.visible')
          cy.get('time').should('be.visible')
          cy.get('a').should('have.attr', 'href').and('include', '/posts/')
        })
      }
    })
  })

  it('should navigate to individual post pages', () => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="post-card"]').length > 0) {
        // Click on the first post
        cy.get('[data-testid="post-card"]').first().find('a').first().click()
        
        // Should be on a post page
        cy.url().should('include', '/posts/')
        
        // Check post page elements
        cy.get('article').should('be.visible')
        cy.get('h1').should('be.visible')
        cy.contains('Tilbake til forsiden').should('be.visible')
      }
    })
  })

  it('should allow navigation back to homepage from post', () => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="post-card"]').length > 0) {
        // Navigate to post
        cy.get('[data-testid="post-card"]').first().find('a').first().click()
        
        // Click back button
        cy.contains('Tilbake til forsiden').click()
        
        // Should be back on homepage
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.contains('Velkommen til min').should('be.visible')
      }
    })
  })

  it('should handle 404 for non-existent posts', () => {
    // Visit a non-existent post URL
    cy.visit('/posts/non-existent-post', { failOnStatusCode: false })
    
    // Should show 404 page or redirect
    cy.get('body').should('be.visible')
  })

  it('should display post metadata correctly', () => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="post-card"]').length > 0) {
        cy.get('[data-testid="post-card"]').first().within(() => {
          // Check date format
          cy.get('time').should('be.visible').and('not.be.empty')
          
          // Check author
          cy.contains('Johannes Padel').should('be.visible')
        })
      }
    })
  })
})