describe('Register page', () => {
  it('reigster user & set token to localStorage & redirect on index', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: '/auth/register',
      response: {
        data: {
          user: { email: 'new@email.com', passwordHash: '' },
          token: 'test-token',
        },
      },
    }).as('register')
    cy.visit('http://localhost:3000/register')

    cy.get('[name=email]')
      .focus()
      .type('new@email.com')
    cy.get('[name=password]')
      .focus()
      .type('new')
    cy.get('button').click()

    cy.wait('@register').then(() => {
      expect(localStorage.getItem('token')).to.eq('test-token')
    })
    cy.location('pathname').should('eq', '/')
  })
})
