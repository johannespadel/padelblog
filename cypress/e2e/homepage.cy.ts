describe('Homepage', () => {
  beforeEach(() => {
    cy.visitHomePage()
  })

  it('should display the hero section correctly', () => {
    // Check hero section elements
    cy.get('h1').should('contain', 'Velkommen til min')
    cy.get('h1').should('contain', 'blogg')
    
    // Check hero description
    cy.contains('Heisann! Dette er min personlige blogg').should('be.visible')
    
    // Check call-to-action buttons
    cy.contains('Les mine innlegg').should('be.visible')
    cy.contains('Sanity Studio').should('be.visible')
  })

  it('should display the posts section', () => {
    // Scroll to posts section
    cy.get('#posts').should('be.visible')
    
    // Check section title
    cy.contains('Siste innlegg').should('be.visible')
    cy.contains('Utforsk mine tanker og erfaringer').should('be.visible')
  })

  it('should have working navigation', () => {
    cy.checkNavigation()
    
    // Check navigation links
    cy.get('nav').within(() => {
      cy.contains('Hjem').should('be.visible')
      cy.contains('Studio').should('have.attr', 'href').and('include', 'sanity.studio')
    })
  })

  it('should be responsive', () => {
    cy.checkResponsiveDesign()
  })

  it('should have proper accessibility attributes', () => {
    // Check for proper heading hierarchy
    cy.get('h1').should('exist')
    cy.get('h2').should('exist')
    
    // Check for alt texts on images (if any)
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt')
    })
    
    // Check for proper link attributes
    cy.get('a[target="_blank"]').each(($link) => {
      cy.wrap($link).should('have.attr', 'rel').and('include', 'noopener')
    })
  })

  it('should handle empty state when no posts exist', () => {
    // This test assumes there might be no posts
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid="post-card"]').length === 0) {
        cy.contains('Ingen innlegg ennå').should('be.visible')
        cy.contains('Gå til Studio').should('be.visible')
      }
    })
  })
})