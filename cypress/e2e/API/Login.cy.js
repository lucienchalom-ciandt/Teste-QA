describe('POST /login', () => {
  const serverUrl = Cypress.expose(serverUrl)
  const user = {
    email: 'fulano@qa.com',
    password: 'teste',
    badPassword: 'batata',
    invalidEmail: 'nao.existe@qa.com'
  }

  it('must log in successfully and return a token', () => {
    cy.request({
      method: 'POST',
      url: `${serverUrl}/login`,
      body: {
        email: user.email,
        password: user.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization).to.be.a('string')
      expect(response.body.authorization).to.include('Bearer')
    })
  })

  it('should return 401 when using an incorrect password', () => {
    cy.request({
      method: 'POST',
      url: `${serverUrl}/login`,
      body: {
        email: user.email,
        password: user.badPassword,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos')
    })
  })

  it('should return 401 when using an unregistered email', () => {
    cy.request({
      method: 'POST',
      url: `${serverUrl}/login`,
      body: {
        email: user.invalidEmail,
        password: user.badPassword,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos')
    })
  })
})
