export const relativeTime = (
  now: Date,
  postDate: Date,
  includeMonths = true,
  includeYears = true
): string => {
  const difference = now.getTime() - postDate.getTime();
  const formatter = new Intl.RelativeTimeFormat('en', {
    style: 'long'
  });
  let value: number;
  let unit: string;

  if (difference < 1000) {
    return 'just now';
  } else if (difference < 60000) {
    value = Math.floor(difference / 1000);
    unit = 'second';
  } else if (difference < 3600000) {
    value = Math.floor(difference / 60000);
    unit = 'minute';
  } else if (difference < 86400000) {
    value = Math.floor(difference / 3600000);
    unit = 'hour';
  } else if (includeMonths && difference < 2592000000) {
    value = Math.floor(difference / 86400000);
    unit = 'day';
  } else if (includeYears && difference < 31536000000) {
    value = Math.floor(difference / 2592000000);
    unit = 'month';
  } else {
    value = Math.floor(difference / 31536000000);
    unit = 'year';
  }

  return formatter.format(-value, unit as Intl.RelativeTimeFormatUnit);
};

export const readableDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return formatter.format(date);
};

export function getCookie(name: string): string {
  const cookies: string[] = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie: string = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(`${name}=`.length, cookie.length);
    }
  }
  return 'system';
}

export function retrieve_icon(symbol: string): string | undefined {
  switch (symbol.toLowerCase()) {
    case 'javascript':
      return 'devicon-plain:javascript';
    case 'typescript':
      return 'devicon-plain:typescript';
    case 'sveltekit':
    case 'svelte':
      return 'devicon-plain:svelte';
    case 'html':
    case 'html5':
      return 'devicon-plain:html5';
    case 'css':
    case 'css3':
      return 'devicon-plain:css3';
    case 'css modules':
      return 'simple-icons:cssmodules';
    case 'git':
      return 'mdi:git';
    case 'figma':
      return 'ph:figma-logo';
    case 'react':
      return 'mdi:react';
    case 'astro':
      return 'devicon-plain:astro';
    case 'nextjs':
      return 'simple-icons:nextdotjs';
    case 'podman':
      return 'devicon-plain:podman';
    case 'docker':
      return 'devicon-plain:docker';
    case 'java':
      return 'devicon-plain:java';
    case 'python':
      return 'devicon-plain:python';
    case 'mysql':
      return 'devicon-plain:mysql';
    case 'sqlite':
      return 'devicon-plain:sqlite';
    case 'mariadb':
      return 'simple-icons:mariadb';
    case 'postgresql':
      return 'devicon-plain:postgresql';
    case 'linkedin':
      return 'devicon-plain:linkedin';
    case 'github':
    case 'github rest api':
      return 'mdi:github';
    case 'linux':
      return 'simple-icons:linux';
    case 'tailwind':
    case 'tailwindcss':
      return 'mdi:tailwind';
    case 'tooling':
    case 'tools':
      return 'lucide:wrench';
    case 'life':
      return 'lucide:leaf';
    case 'language':
      return 'lucide:languages';
    case 'train':
      return 'lucide:train';
    case 'vault':
      return 'fluent:vault-24-regular';
    case 'think':
    case 'thinking':
      return 'lucide:brain-circuit';
    case 'publish':
      return 'lucide:newspaper';
    default:
      return '';
  }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeoutId: number;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  } as T;
}
