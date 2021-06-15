
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM3 21a.75.75 0 010-1.5h.75V15c-.827 0-1.5-.673-1.5-1.5 0-.772.492-1.455 1.225-1.699l1.775-.591V8.25a6.755 6.755 0 016-6.708V.75a.75.75 0 011.5 0v.792c3.392.376 6 3.256 6 6.708v2.96l1.775.592A1.788 1.788 0 0121.75 13.5c0 .827-.673 1.5-1.5 1.5v4.5H21a.75.75 0 010 1.5H3zm15.75-1.5V15h-1.5v4.5h1.5zm-3 0V15h-1.5v4.5h1.5zm-3 0V15h-1.5v4.5h1.5zm-3 0V15h-1.5v4.5h1.5zm-3 0V15h-1.5v4.5h1.5zm-2.801-6.276a.291.291 0 00-.199.276h16.5a.29.29 0 00-.198-.275L12 10.54l-8.051 2.684zM12 9.041c.162 0 .321.026.473.076l4.777 1.593V9H15a.75.75 0 010-1.5h2.195A5.263 5.263 0 0012 3a5.262 5.262 0 00-5.195 4.5H9A.75.75 0 019 9H6.75v1.71l4.776-1.592c.153-.051.312-.077.474-.077z"}})])
          )
        }
      }
    