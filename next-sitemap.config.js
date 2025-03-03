module.exports = {
    siteUrl: 'https://yigitbozyaka.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }
      ]
    },
    additionalPaths: async (config) => [
      { 
        loc: '/', 
        changefreq: 'yearly',
        priority: 1,
        lastmod: new Date().toISOString()
      },
      { 
        loc: '/about-me', 
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      },
      { 
        loc: '/projects', 
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      },
      { 
        loc: '/skills', 
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString()
      },
      { 
        loc: '/hire-me', 
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString()
      }
    ]
  }