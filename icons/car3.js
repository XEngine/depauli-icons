
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20.25 22.25A2.253 2.253 0 0118 20v-.75H6V20c0 1.241-1.009 2.25-2.25 2.25S1.5 21.24 1.5 20v-.879A2.258 2.258 0 010 17v-4.5c0-.36.075-.711.223-1.042l.014-.03c.127-.276.3-.525.513-.737l1.94-1.939-.75-.75H.75a.75.75 0 010-1.501h1.5c.2 0 .389.078.53.22l.676.676L4.77 3.888a2.93 2.93 0 012.728-1.887H16.5c1.206 0 2.302.757 2.729 1.885l1.315 3.511.676-.676c.14-.14.333-.22.53-.22h1.5a.75.75 0 010 1.5h-1.189l-.75.75 1.94 1.94a2.55 2.55 0 01.532.78c.142.317.217.668.217 1.029V17c0 .96-.615 1.808-1.5 2.121V20c0 1.24-1.009 2.25-2.25 2.25zM19.5 20a.75.75 0 001.5 0v-.75h-1.5V20zM3 20a.75.75 0 001.5 0v-.75H3V20zm-1.5-3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-2.25a.75.75 0 010-1.5h2.25v-1.5h-2.9a.755.755 0 00-.643.364l-1.376 2.294a2.26 2.26 0 01-1.929 1.092.75.75 0 010-1.5.753.753 0 00.643-.364l1.376-2.294A2.26 2.26 0 0119.6 11h1.838l-1.499-1.499H4.061L2.562 11H4.4a2.26 2.26 0 011.93 1.092l1.375 2.293a.755.755 0 00.644.365.75.75 0 01.002 1.5 2.263 2.263 0 01-1.932-1.093l-1.375-2.293a.753.753 0 00-.643-.364H1.5V14h2.25a.75.75 0 010 1.5H1.5V17zm17.668-8.999l-1.343-3.587a1.423 1.423 0 00-1.324-.913H7.499c-.585 0-1.117.368-1.324.915L4.832 8.001h14.336z"}}),_c('path',{attrs:{"d":"M12 16.25a2.628 2.628 0 01-2.625-2.625A2.628 2.628 0 0112 11a2.627 2.627 0 012.625 2.625A2.628 2.628 0 0112 16.25zm0-3.75a1.126 1.126 0 000 2.25c.62 0 1.125-.505 1.125-1.125S12.62 12.5 12 12.5z"}})])
          )
        }
      }
    