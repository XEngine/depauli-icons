
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-3.308 0-6-2.692-6-6V8.25c0-.96.615-1.808 1.5-2.121V.75A.75.75 0 018.25 0h7.5a.75.75 0 01.75.75v5.379A2.258 2.258 0 0118 8.25V18c0 3.308-2.692 6-6 6zM8.25 7.5a.75.75 0 00-.75.75V18c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V8.25a.75.75 0 00-.75-.75h-7.5zM15 6V1.5H9V6h6z"}}),_c('path',{attrs:{"d":"M11.25 4.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    