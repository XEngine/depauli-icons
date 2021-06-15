
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
            children.concat([_c('path',{attrs:{"d":"M5.382 21.689c-.907 0-1.682-.321-2.239-.927-.593-.644-.893-1.553-.893-2.701v-2.25H1.5a.75.75 0 01-.75-.75v-3.75c0-4.963 4.037-9 9-9s9 4.037 9 9v3.75a.75.75 0 01-.75.75h-6.792a6.858 6.858 0 01-1.905 4.021c-1.132 1.163-2.597 1.857-3.921 1.857zM3.75 18.061c0 .76.167 1.327.497 1.686.336.365.802.442 1.135.442 2.31 0 3.995-2.466 4.31-4.378H3.75v2.25zm13.5-3.75v-1.5h-15v1.5h15zm0-3c0-4.135-3.365-7.5-7.5-7.5s-7.5 3.365-7.5 7.5h15z"}}),_c('path',{attrs:{"d":"M21.75 15.811c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75h.75a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25v-4.5z"}})])
          )
        }
      }
    