export default [
    {
      name     : 'Inbox',
      href     : '/',
      path     : '/(/?[?#].*)?(#.*)?',
      component: 'p-inbox',
      icon     : 'inbox'
    },
    {
      name     : 'Starred',
      href     : '/favorite',
      path     : '/favorite(/?[?#].*)?(#.*)?',
      component: 'p-favorite',
      icon     : 'favorite'
    },
    {
      name     : 'Sent',
      href     : '/sent',
      path     : '/sent(/?[?#].*)?(#.*)?',
      component: 'p-sent',
      icon     : 'send',
      separator: true
    },
    {
        name     : 'Subscription',
        href     : '/subscription',
        path     : '/subscription(/?[?#].*)?(#.*)?',
        component: 'p-subscription',
        icon     : 'rocket',
    },
    {
      name     : 'Settings',
      href     : '/settings',
      path     : '/settings(/?[?#].*)?(#.*)?',
      component: 'p-settings',
      icon     : 'settings'
    }
  ]
  