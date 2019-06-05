describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy
      .get('[placeholder="type a number"]')
      .as('numInput');
  });

  it('should start with the correct default state', () => {
    cy
      .get('@numInput')
      .should('have.focus')
      .should('have.be.empty');
  });

  it('should add the typed number to recent searches', () => {
    cy
      .get('@numInput')
      .type('100');

    cy
      .contains('Get info')
      .click();

    cy
      .contains('button', '100');
  })
})