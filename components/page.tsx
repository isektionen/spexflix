import Router from 'next/router';

Router.events.on('routeChangeComplete', (url: string) => {
  window.analytics.page(url);
});

const Page = ({ children }) => <div>{children}</div>;

export default Page;
