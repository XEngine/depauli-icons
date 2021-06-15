
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}}),_c('path',{attrs:{"d":"M13.5 17.25c-2.438 0-4.158-1.062-4.876-3H7.5a.75.75 0 010-1.5h.786a7.675 7.675 0 010-1.5H7.5a.75.75 0 010-1.5h1.124c.717-1.938 2.438-3 4.876-3a.75.75 0 010 1.5c-1.564 0-2.649.504-3.233 1.5H13.5a.75.75 0 010 1.5H9.796a6.152 6.152 0 000 1.5H12a.75.75 0 010 1.5h-1.733c.584.996 1.669 1.5 3.233 1.5a.75.75 0 010 1.5z"}})])
          )
        }
      }
    