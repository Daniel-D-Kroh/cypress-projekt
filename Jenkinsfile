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

                    stage('Cypress - List Files (Debug)') {
                        sh "ls -R cypress" // Listet rekursiv alle Dateien im 'cypress'-Ordner auf
                    }

                    stage('Cypress - Run Tests example.cy.js') {
                        sh "npx cypress run --browser chrome --headless"
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