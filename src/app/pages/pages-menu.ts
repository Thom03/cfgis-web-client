import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'list-outline',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'FEATURES',
    group: false,
  },

  {
    title: 'Maps',
    icon: 'map-outline',
    children: [

      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },

    ],
  },
  {
    title: 'Summary',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Chart',
        link: '/pages/charts/echarts',
      },

    ],
  },

  {
    title: 'Projects & Layers',
    icon: 'grid-outline',
    children: [
      {
        title: 'Map Layers',
        link: '/pages/tables/smart-table',
      },
      // {
      //   title: 'Form Layouts',
      //   link: '/pages/forms/layouts',
      // },
      // {
      //   title: 'Accordion',
      //   link: '/pages/layout/accordion',
      // },
      {
        title: 'Projects',
        link: '/pages/tables/tree-grid',
      },
    ],
  },

  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
