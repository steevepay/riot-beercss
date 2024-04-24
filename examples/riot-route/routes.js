export default [
    {
      name     : 'Inbox',
      href     : '/',
      path     : '/(/?[?#].*)?(#.*)?',
      component: 'p-inbox'
    },
    {
      name     : 'Favorites',
      href     : '/favorite',
      path     : '/favorite(/?[?#].*)?(#.*)?',
      component: 'p-favorite'
    },
    {
        name     : 'My Profile',
        href     : '/profile',
        path     : '/profile(/?[?#].*)?(#.*)?',
        component: 'p-profile'
    },
    {
      name     : 'Billing',
      href     : '/billing',
      path     : '/billing(/?[?#].*)?(#.*)?',
      component: 'p-billing'
    }
  ]
  