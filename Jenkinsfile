pipeline {
    agent any

    environment {
        CYPRESS_PROJECT_PATH = '.'
        RESULTS_DIR = 'test-results'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Daniel-D-Kroh/cypress-projekt.git'
            }
        }

        stage('Install Cypress Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Execute Cypress Tests') {
            steps {
                script {
                    stage('Cypress - Prepare Reports') {
                        sh "mkdir -p ${RESULTS_DIR}/cypress"
                    }

                    stage('Cypress - Run Test 1') {
                        sh "npx cypress run --browser chrome --headless --spec cypress/test/e2e/example.cy.js"
                    }

                    stage('Cypress - Run Test 2') {
                        sh "npx cypress run --browser chrome --headless --spec cypress/test/e2e/example1.cy.js"
                    }
                }
            }
        }

        stage('Publish Cypress Results') {
            steps {
                junit "${RESULTS_DIR}/cypress/**/*.xml"
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: "${RESULTS_DIR}/**/*", fingerprint: true
            deleteDir()
        }
    }
}