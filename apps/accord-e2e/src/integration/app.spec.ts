import { getAccords, getAddAccordButton } from '../support/app.po';

describe('accord', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the accords', () => {
    getAccords().should((t) => expect(t.length).equal(2));
    getAddAccordButton().click();
    getAccords().should((t) => expect(t.length).equal(3));
  });
});
