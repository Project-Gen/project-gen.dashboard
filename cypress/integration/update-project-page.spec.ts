describe('Update Project Page', () => {
  it('update project flow: fetch project, set to form, update, redirect', async () => {
    const project = {
      id: 10,
      title: 'First project',
      description: 'Hello friend',
    }
    cy.server()
    cy.route({
      method: 'GET',
      url: `/admin/projects/${project.id}`,
      response: { data: project },
    }).as('fetchProject')
    localStorage.setItem('token', 'test-token')

    cy.route({
      method: 'PUT',
      url: `/admin/projects/${project.id}`,
      response: {},
    }).as('updateProject')

    cy.visit(`http://localhost:3000/projects/${project.id}/update`)

    cy.wait('@fetchProject')
    cy.get('input[name=title]')
      .should('have.value', project.title)
      .clear()
      .type('New Title')
    cy.get('input[name=description]')
      .should('have.value', project.description)
      .clear()
      .type('New description')

    cy.get('button').click()
    cy.wait('@updateProject').then((xhr) => {
      expect(xhr.requestBody).eql({
        id: project.id,
        title: 'New Title',
        description: 'New description',
      })
    })

    cy.location('pathname').should('eq', '/projects')
  })
})
