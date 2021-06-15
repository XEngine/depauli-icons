
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}}),_c('path',{attrs:{"d":"M15.75 16.5a.743.743 0 01-.53-.22l-2.25-2.25A2.252 2.252 0 019.751 12c0-.96.615-1.808 1.5-2.121V5.25a.75.75 0 011.5 0v4.629a2.26 2.26 0 011.5 2.121c0 .338-.075.668-.22.969l2.25 2.25a.752.752 0 01-.531 1.281zM12 11.25a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    