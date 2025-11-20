import config from '~/config.json';

export const navLinks = [
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Experience',
    pathname: '/#Experience',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
