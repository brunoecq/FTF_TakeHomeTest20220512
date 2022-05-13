export default () => ({
    port: parseInt(process.env.PORT, 10) || 4000,
    env: process.env.NODE_ENV || 'development',
    githubapi: {
      baseUrl: process.env.BASE_URL || 'https://api.github.com/repos/{0}/{1}/commits',
      userName: process.env.USER_NAME || 'brunoecq',
      projectName: process.env.PROJECT_NAME || 'FTF_TakeHomeTest20220512',
    },
  });