# Cypress End-to-End Testprojekt

Dieses Repository enthält End-to-End-Tests, die mit Cypress geschrieben wurden. Und diesen zur Laufzeitmessung für die Bacheloarbeit mit dem **Titel**:

**"Migration und Optimierung automatisierter
End-to-End-Tests: Ein Konzept zur Überführung
bestehender Cypress-Tests in Playwright unter
Berücksichtigung der BaFin- Vorgaben zur
Revisionssicherheit"**

## Wichtige Befehle

Hier findest du eine Zusammenfassung der gebräuchlichsten Cypress-Befehle, die dir helfen, die Tests auszuführen, den Test Runner zu öffnen, Berichte zu generieren und vieles mehr.

### Cypress Test Runner starten

Der Cypress Test Runner ist die interaktive Benutzeroberfläche, in der du deine Tests entwickeln, ausführen und debuggen kannst.

* **Test Runner öffnen**
  Startet den Cypress Test Runner. Hier kannst du Tests auswählen und ausführen, die Testausführung in Echtzeit verfolgen und debuggen.
    ```bash
    npx cypress open
    ```

### Tests über die Kommandozeile ausführen (Headless)

Für automatisierte Testläufe in CI/CD-Umgebungen oder wenn du Tests ohne sichtbares Browserfenster ausführen möchtest (headless).

* **Alle Tests ausführen**
  Führt alle Tests im `e2e` Verzeichnis headless aus.
    ```bash
    npx cypress run
    ```

* **Tests für einen spezifischen Browser ausführen**
  Führt Tests in einem bestimmten Browser aus (z.B. Chrome, Firefox, Edge). Standardmäßig ist Electron der Browser, der beim headless-Modus verwendet wird.
    ```bash
    npx cypress run --browser chrome
    npx cypress run --browser firefox
    npx cypress run --browser edge
    ```

* **Tests in einem spezifischen Verzeichnis oder einer spezifischen Datei ausführen**
  Führt nur die Tests aus einem bestimmten Ordner oder einer bestimmten Datei aus.
    ```bash
    npx cypress run --spec "cypress/e2e/login/*.cy.js"
    npx cypress run --spec "cypress/e2e/my-feature.cy.js"
    ```

* **Tests im "Headed" Modus über CLI ausführen**
  Führt Tests über die Kommandozeile aus, aber mit einem sichtbaren Browserfenster. Nützlich für die visuelle Überprüfung.
    ```bash
    npx cypress run --headed
    ```

* **Tests mit aufgezeichnetem Video und Screenshots ausführen**
  Standardmäßig nimmt Cypress Videos von der Testausführung auf und macht Screenshots bei Fehlern. Du kannst dies explizit steuern.
    ```bash
    npx cypress run --record --key <your-record-key> # Benötigt Cypress Dashboard Integration
    ```

### Debugging

* **Debug-Ausgabe im Terminal**
  Um detailliertere Debug-Informationen im Terminal zu sehen, setze die `DEBUG` Umgebungsvariable.
    ```bash
    # Für Linux/macOS
    DEBUG=cypress:* npx cypress run

    # Für Windows (PowerShell)
    $env:DEBUG="cypress:*"
    npx cypress run

    # Für Windows (cmd)
    set DEBUG=cypress:*
    npx cypress run
    ```

### Berichterstattung

Cypress generiert standardmäßig im Headless-Modus ein Video und Screenshots bei Fehlern. Für erweiterte Berichte wird oft `mocha-reporter` verwendet.

* **JUnit XML-Bericht generieren**
  Um einen JUnit XML-Bericht zu generieren (nützlich für CI/CD-Tools wie Jenkins, GitLab CI, Azure DevOps), musst du `mocha-junit-reporter` installieren und in deiner `cypress.config.js` konfigurieren.

    1.  **Installation:**
        ```bash
        npm install --save-dev mocha-junit-reporter
        ```

    2.  **Konfiguration in `cypress.config.js` (Beispiel):**
        ```javascript
        const { defineConfig } = require('cypress');

        module.exports = defineConfig({
          e2e: {
            setupNodeEvents(on, config) {
              // implement node event listeners here
            },
            reporter: 'junit',
            reporterOptions: {
              mochaFile: 'cypress/results/junit-[hash].xml', // Pfad und Dateiname des Berichts
              toConsole: true, // Berichte auch in der Konsole ausgeben
            },
          },
        });
        ```

    3.  **Tests ausführen, um Bericht zu generieren:**
        ```bash
        npx cypress run
        ```

### Allgemeine nützliche Befehle

* **Cypress Version anzeigen**
    ```bash
    npx cypress version
    ```

* **Cypress Info anzeigen**
  Zeigt Informationen über deine Cypress-Installation, Umgebung und Projekt an.
    ```bash
    npx cypress info
    ```

---

**Hinweis:** Stelle sicher, dass du `Cypress` in deinem Projekt installiert hast (`npm install cypress --save-dev`). Die Befehle verwenden `npx`, um die lokal installierte Cypress-Version auszuführen.