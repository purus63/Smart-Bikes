pipeline {
    agent any
    stages {
     stage('Get Into AWS and build') {
            steps {
                sh 'cd;pwd;ls -la .ssh/; less .ssh/id_ed25519.pub'

                sh 'whoami'

                sh 'ssh ubuntu@15.206.48.113 "cd bool/smart-bikes;sudo docker-compose down --remove-orphans"'

                sh 'ssh ubuntu@15.206.48.113 "cd bool/smart-bikes;  git checkout v1-0.0.7"'

                sh 'ssh ubuntu@15.206.48.113 "cd bool/smart-bikes;  git pull origin v1-0.0.7 "'

                sh 'ssh ubuntu@15.206.48.113 "cd bool/smart-bikes; mvn -DskipTests clean compile package "'

                sh 'ssh ubuntu@15.206.48.113 "cd bool/smart-bikes; sudo docker-compose up -d --build"'
            }
        }
    }
}