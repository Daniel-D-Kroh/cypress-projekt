import {createAliasAsString} from "../../support/basefunctions";


describe('Volksbank User Website Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.vb-muensterland.de/privatkunden.html');
        cy.get('button').contains('Allen zustimmen').click();
        cy.title().should('eq', 'Privatkunden - Volksbank im Münsterland eG');
    });

    it('Sollte einen neuen Bankkunden erfolgreich registrieren', () => {
        cy.log('Schritt 1: Navigation zur Kontoeröffnung');
        cy.get('a').contains('Konto & Karten').click();
        cy.get('.nav-flyout.nav-flyout--4-cols.is-active').contains('Übersicht Kontomodelle').click();
        cy.get('a').contains('Jetzt Konto eröffnen').first().click();
        cy.get('a').contains('Konto eröffnen').first().click();
        cy.get('button').contains('Weiter').click();



        cy.log('Schritt 2: Persönliche Daten eingeben');
        cy.get('produktverkauf-top-bar').should('contain', 'Personendaten');
        cy.get('mat-label').contains('Anrede').click();
        cy.get('[role="listbox"').contains('Herr').click();
        cy.get('#vorname-parent').type('John');
        cy.get('#nachname-parent').type('Doe');
        cy.get('#geburtsdatum-parent').type('01.01.1990');
        cy.get('#geburtsort-parent').type('Musterstadt');
        cy.get('mat-label').contains('Geburtsland').click();
        cy.get('[role="listbox"').contains('Deutschland').click();
        cy.get('mat-label').contains('Staatsangehörigkeit (Land)').click();
        cy.get('[role="listbox"').contains('Deutsch').click();
        cy.get('mat-label').contains('Familienstand (optional)').click();
        cy.get('[role="listbox"').contains('getrennt lebend').click();
        cy.get('button').contains('Weiter').click();


        cy.log('Schritt 3: Kontakt- und Adressdaten eingeben');
        cy.get('#strasse-parent').first().type('Münzstr.');
        cy.get('#hausnummer-parent').type('123');
        cy.get('#plz-parent').type('48143');
        cy.get('#ort-parent').type('Münster');
        cy.get('#email-parent').first().type('john.doe@example.org');
        cy.get('#emailWdh-parent').last().type('john.doe@example.org');
        cy.get('#mobiltelefon-parent').type('176123123123');
        cy.get('button').contains('Weiter').click();

        cy.log('Schritt 4: Steuerliche Informationen & Beruf eingeben');
        cy.get('h1').should('contain', 'Mehr Informationen');
        cy.get('mat-label').contains('Berufliche Tätigkeit').click();
        cy.get('[role="listbox"').contains('Angestellte(r)').click();
        cy.get('mat-radio-button').first().find('input[type="radio"]').check();
        cy.get('mat-label').contains('Land auswählen').click();
        cy.get('[role="listbox"').contains('Deutschland').click();
        cy.get('#weitereinfos-abfrage-bundeszentralamt-input').click();
        cy.get('[data-cy="weiter-button"]').click();


        cy.log('Schritt 5: Online-Banking-Zugang einrichten');
        const alias = createAliasAsString();
        cy.get('mat-label').contains('Alias').type(alias);
        cy.get('[data-cy="password-input"]').type('Test12345');
        cy.get('[data-cy="password-wdh-input"]').type('Test12345');
        cy.get('[data-cy="weiter-button"]').click();

        cy.log('Schritt 6: Marketing-Präferenzen & Zustimmungen');
        cy.get('#mat-mdc-checkbox-1').click();
        cy.get('[data-cy="weiter-button"]').click();

        cy.log('Schritt 7: Zusammenfassung & Beauftragung');
        cy.get('#informationsservice-eup-debitkarte-keine').click();
        cy.get('#informationsservice-eup-debitkarte-mail').click();
        cy.get('[data-cy="weiter-button"]').click();

        cy.log('Schritt 8: Einwilligung');
        cy.get('#checkbox-bestaetigungen-input').click();
        cy.get('[data-cy="weiter-button"]').click();
        cy.get('mat-progress-spinner').should('not.exist');

        cy.log('Schritt 9: Ausleitung');
        cy.get('#ausleitung-ueberschrift h2').should('contain', 'Vielen Dank für Ihr Interesse!');

    });
});