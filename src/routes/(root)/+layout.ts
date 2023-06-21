import config from '$lib/config.json';

interface Config {
  [key: string]: {
    title: string;
    description: string;
  };
}

export const load = ({
  url
}: {
  url: URL;
}): { pathname: string; title: string; description: string } => {
  const { pathname } = url;

  let title = '';
  let description = '';

  const typedConfig: Config = config;

  // For the landingpage
  if (pathname === '/') {
    title = typedConfig.landingpage.title;
    description = typedConfig.landingpage.description;
  } else {
    for (const key in typedConfig) {
      if (key === pathname.substring(1)) {
        title = typedConfig[key].title;
        description = typedConfig[key].description;
        break;
      } else if (pathname === '/blog/index') {
        title = typedConfig.index.title;
        description = typedConfig.index.description;
      }
    }
  }

  return {
    pathname,
    title,
    description
  };
};
