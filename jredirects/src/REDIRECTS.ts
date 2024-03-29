import { redirects } from './_internals/types';

export const temporary: redirects={ //302
    '/#dont-forget-private-schools': '/dont-forget-private-schools',
    // Write your redirects here:
    '/meetings': ['/meeting', '/agendas', '/meeting-meetings'],
    
    // Examples:
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ': '/rick-roll', // external site
    '/example-destination-regex': /example-source-regex-\d/, // e.g. example-source-regex-3
    '/example-destination-array': ['/example-source-array-a', '/example-source-array-b', '/example-source-array-c'], //include multiple sources that redirect to the same destination
    '/example-destination': '/example-source',
};

export const permanent: redirects={ //301
    // Redirects here will be cached, so changing/deleting them in the future will not reflect immediately
    // 'https://docs.google.com/document/d/1hjc1ZM9gfHd7VsPnQcnHtzrVOx8RguzEajhax7rk7Ww/edit': '/meeting',
    '/the-state-of-e-buses': ['/state-of-the-e-bus', '/the-state', '/state', '/the-state-of-the-electric-bus', '/the-state-of-electric-buses', '/state-of-the-electric-bus', '/state-of-the-electric-buses', '/state-of-the-ebus', '/state-of-the-ebuses', '/the-state-of-the-e-bus']
};
