pipeline
{
    agent any
    stages
    {
        stage('Clone')
        {
            steps
            {
              git branch: 'main', url: 'https://github.com/cuchuoind88/lotteria.git'
            }
        }

    }
    post
    {
        always
        {
            mail bcc: '', body: '''Congratulation...
            BUILD SUCCESSFULLY!''', cc: '', from: '', replyTo: '', subject: 'Build Notification', to: '20521081@gm.uit.edu.vn'
        }
    }
}