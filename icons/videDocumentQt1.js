
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M15 18.75a.75.75 0 01-.75-.75v-6.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75V18a.75.75 0 01-.75.75zM10.5 20.25a.743.743 0 01-.53-.22l-1.307-1.307A2.264 2.264 0 016.75 16.5V12c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v4.5a2.25 2.25 0 01-.895 1.795l.675.675a.744.744 0 010 1.06.743.743 0 01-.53.22zm-1.5-9a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    