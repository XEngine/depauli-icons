
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}}),_c('path',{attrs:{"d":"M12 18.75a.75.75 0 01-.75-.75v-2.25h-1.5a.75.75 0 010-1.5h1.5v-.827a3.743 3.743 0 01-3-3.673V7.5a.75.75 0 011.5 0v2.25A2.252 2.252 0 0012 12a2.252 2.252 0 002.25-2.25V7.5a.75.75 0 011.5 0v2.25a3.743 3.743 0 01-3 3.673v.827h1.5a.75.75 0 010 1.5h-1.5V18a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    