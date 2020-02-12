describe('Projects page', () => {
  it('display list', () => {
    cy.server()
    const mocks = [
      {
        id: 1,
        title: 'Hello',
        description: 'Hello description',
      },
      {
        id: 2,
        title: 'World',
        description: 'World description',
      },
    ]
    cy.route({
      method: 'GET',
      url: '/admin/projects',
      response: {
        data: mocks,
        count: 0,
      },
    }).as('fetchProjects')
    localStorage.setItem('token', 'test-token')
    cy.visit('http://localhost:3000/projects')
    cy.wait('@fetchProjects').then(() => {
      mocks.forEach((p) => {
        cy.contains(p.title)
      })
    })
  })
})
