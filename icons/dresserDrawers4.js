
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75v-.75H5.25v.75a.75.75 0 01-1.5 0v-.768a1.753 1.753 0 01-1.5-1.732V1.5H1.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-.75v19.25c0 .88-.653 1.611-1.5 1.732v.768a.75.75 0 01-.75.75zm.5-3a.25.25 0 00.25-.25V13.5h-7.5V21H20zm-16.25-.25c0 .138.112.25.25.25h7.25v-7.5h-7.5v7.25zM20.25 12V7.5H3.75V12h16.5zm0-6V1.5H3.75V6h16.5z"}}),_c('path',{attrs:{"d":"M10.5 10.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM6.75 16.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 16.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    