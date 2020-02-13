describe('Login page', () => {
  it('login user & set token to localStorage & and redirect on index', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: '/auth/login',
      response: {
        data: {
          user: { email: 'new@email.com', passwordHash: '' },
          token: 'test-token',
        },
      },
    }).as('login')
    cy.visit('http://localhost:3000/login')

    cy.get('[name=email]')
      .focus()
      .type('new@email.com')
    cy.get('[name=password]')
      .focus()
      .type('new')
    cy.get('button').click()

    cy.wait('@login').then((xhr) => {
      expect(xhr.requestBody).eql({
        email: 'new@email.com',
        password: 'new',
      })
      expect(localStorage.getItem('token')).to.eq('test-token')
    })
    cy.location('pathname').should('eq', '/')
  })
})
