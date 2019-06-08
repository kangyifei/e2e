describe('Todo App Test', function() {
  it('successfully loads', function() {
    cy.visit('/');
    cy.get('input').type('Taks1');
    cy.contains('Add').click();

    cy.get('input').type('Taks2');
    cy.contains('Add').click();

    cy.get('input').type('Taks3');
    cy.contains('Add').click();

    cy.pause(1000);


    cy.get('.delete-btn').first().click();

    cy.contains('Edit').first().click();
    cy.get('#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input').clear()
        .type("changed1");
    cy.get('button').contains('Save').click();

    cy.pause(1000);

    cy.contains('changed1').click();

  })
})
