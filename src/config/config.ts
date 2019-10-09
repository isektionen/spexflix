const config = {
  siteTitle: process.env.REACT_APP_SITE_TITLE
    ? process.env.REACT_APP_SITE_TITLE
    : 'Youflix',

  publisher: process.env.REACT_APP_PUBLISHER
    ? process.env.REACT_APP_PUBLISHER
    : 'Youflix',

  copyrightFromYear: process.env.REACT_APP_COPYRIGHT_FROM_YEAR
    ? Number(process.env.REACT_APP_COPYRIGHT_FROM_YEAR)
    : new Date().getFullYear(),
};

export default config;
