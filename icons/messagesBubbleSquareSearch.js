
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.753.753 0 01-.75-.75V19.5h-.75A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h1.5a.75.75 0 01.75.75v3.001L7.773 19.3a.747.747 0 011.05.15c.12.161.171.358.142.556a.74.74 0 01-.293.494L4.2 23.85a.753.753 0 01-.45.15z"}}),_c('path',{attrs:{"d":"M23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.746.746 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    