
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
            children.concat([_c('path',{attrs:{"d":"M12 10.498a.75.75 0 01-.75-.75v-8.25h-7.5c-.401 0-.779.157-1.062.44s-.438.661-.438 1.061v.749a.75.75 0 01-1.5 0V3A2.978 2.978 0 011.627.879a2.982 2.982 0 012.12-.881H20.25c1.654 0 3 1.346 3 3v.752a.75.75 0 01-1.5 0V3c0-.828-.673-1.502-1.5-1.502h-7.5v8.25a.75.75 0 01-.75.75zM7.5 23.998a.75.75 0 010-1.5h3.75v-6.75a.75.75 0 011.5 0v6.75h3.75a.75.75 0 010 1.5h-9zM1.5 13.498a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    