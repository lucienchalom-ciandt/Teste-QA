describe('Login page', () => {
  const frontUrl = 'https://front.serverest.dev'
  const user = {
    email: 'fulano@qa.com',
    password: 'teste',
    badPassword: 'batata',
    invalidEmail: 'nao.existe@qa.com'
  }

  beforeEach(() => {
    cy.visit(`${frontUrl}/login`)
  })

  it('must log in successfully and redirect to the home page', () => {
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="senha"]').type(user.password)
    cy.get('[data-testid="entrar"]').click()

    cy.url().should('not.include', '/login')
    cy.url().should('include', '/admin/home')
  })

  it('should show an error message when using an incorrect password', () => {
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="senha"]').type(user.badPassword)
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert.alert-secondary span')
      .should('be.visible')
      .and('contain.text', 'Email e/ou senha inválidos')
  })

  it('should show an error message when using an unregistered email', () => {
    cy.get('[data-testid="email"]').type(user.invalidEmail)
    cy.get('[data-testid="senha"]').type(user.badPassword)
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert.alert-secondary span')
      .should('be.visible')
      .and('contain.text', 'Email e/ou senha inválidos')
  })
})
