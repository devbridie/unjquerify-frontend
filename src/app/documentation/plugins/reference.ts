export interface Reference {
  type: ReferenceType;
  url: string;
  display: string;
}

export type ReferenceType = 'jquery' | 'mdn' | 'caniuse' | 'youdon\'tneedjquery';

export function youDontNeedJquery(section: string): Reference {
  return {
    type: 'youdon\'tneedjquery',
    url: 'https://github.com/nefe/You-Dont-Need-jQuery#' + section,
    display: `You Don't Need jQuery: §${section}`,
  };
}

export function mdnReference(subPath: string): Reference {
  return {
    type: 'mdn',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/' + subPath + '/',
    display: `MDN Web Docs: <code>${subPath.replace('/', '.')}</code>`
  };
}

export function jqueryApiReference(subPath: string): Reference {
  return {
    type: 'jquery',
    url: 'https://api.jquery.com/' + subPath + '/',
    display: `jQuery Documentation: <code>${subPath}</code>`,
  };
}
