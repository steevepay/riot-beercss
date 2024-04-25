export default [
    {
      name     : 'Inbox',
      href     : '/',
      path     : '/(/?[?#].*)?(#.*)?',
      component: 'p-inbox'
    },
    {
      name     : 'Starred',
      href     : '/favorite',
      path     : '/favorite(/?[?#].*)?(#.*)?',
      component: 'p-favorite'
    },
    {
      name     : 'Sent',
      href     : '/sent',
      path     : '/sent(/?[?#].*)?(#.*)?',
      component: 'p-sent'
    },
    {
        name     : 'Subscription',
        href     : '/subscription',
        path     : '/subscription(/?[?#].*)?(#.*)?',
        component: 'p-subscription'
    },
    {
      name     : 'Settings',
      href     : '/settings',
      path     : '/settings(/?[?#].*)?(#.*)?',
      component: 'p-settings'
    }
  ]
  