
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
            children.concat([_c('path',{attrs:{"d":"M17.851 17.252a4.086 4.086 0 01-2.453-.815 4.138 4.138 0 01-1.543-2.316.752.752 0 01.728-.931.75.75 0 01.728.569 2.63 2.63 0 00.981 1.473c.455.338.996.517 1.562.517.829 0 1.618-.395 2.11-1.057a.755.755 0 011.05-.154.75.75 0 01.155 1.05 4.1 4.1 0 01-3.318 1.664z"}}),_c('path',{attrs:{"d":"M17.111 24a.75.75 0 010-1.5h5.188a4.522 4.522 0 00-4.438-3.75 4.37 4.37 0 00-1.812.389.75.75 0 01-.617-1.366 5.805 5.805 0 012.402-.521h.029a6.007 6.007 0 015.998 6 .75.75 0 01-.75.75h-6zM23.124 14.264a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.985 5.985 0 01-1.263 3.676l3.293 3.293a.752.752 0 01-.53 1.281zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M2.516 16.008a.75.75 0 01-.641-1.14 5.137 5.137 0 00.75-2.856v-1.025l.002-.038a4.85 4.85 0 01.357-1.908 4.854 4.854 0 014.883-3.027.744.744 0 01.504.274.745.745 0 01.163.55.747.747 0 01-.827.667c-.057-.006-.116-.005-.179-.005h-.03a3.36 3.36 0 00-3.335 2.879 4.7 4.7 0 002.769-1.565.752.752 0 011.134-.001 4.853 4.853 0 001.717 1.258.751.751 0 01-.598 1.376 6.42 6.42 0 01-1.684-1.077 6.235 6.235 0 01-3.221 1.509 3.358 3.358 0 001.951 2.123c.405.165.831.248 1.265.248a3.365 3.365 0 003.132-2.105.747.747 0 011.307-.15.75.75 0 01.468.644c.053.784.301 1.552.716 2.219a.746.746 0 01-.24 1.033.75.75 0 01-1.033-.241 6.338 6.338 0 01-.692-1.55 4.823 4.823 0 01-1.756 1.265 4.838 4.838 0 01-3.731.026 4.824 4.824 0 01-1.819-1.294 6.587 6.587 0 01-.691 1.551.745.745 0 01-.641.36zM14.25 24a.75.75 0 01-.75-.749 5.992 5.992 0 00-3.327-5.363L8.03 20.03a.744.744 0 01-1.06 0l-2.143-2.143A5.994 5.994 0 001.5 23.25a.75.75 0 01-1.5 0 7.456 7.456 0 014.715-6.953.755.755 0 01.809.167L7.5 18.44l1.977-1.977a.742.742 0 01.53-.219c.095 0 .188.018.276.052A7.456 7.456 0 0115 23.25a.752.752 0 01-.75.75z"}})])
          )
        }
      }
    