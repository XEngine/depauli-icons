
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 01-.75-.75V8.625L2 4.5H.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0V3h1.5v-.75a.75.75 0 011.5 0V3h4.5v-.75a.75.75 0 011.5 0V3h1.5v-.75a.75.75 0 011.5 0V3h.75a.75.75 0 010 1.5H14.5L9 8.625V23.25a.75.75 0 01-.75.75zm0-16.688L12 4.5H4.5l3.75 2.812z"}}),_c('path',{attrs:{"d":"M17.25 24a.75.75 0 01-.75-.75v-7.189L12.439 12H11.25a.75.75 0 010-1.5H12v-.75a.75.75 0 011.5 0v.75H21v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-1.189L18 16.061v7.189a.75.75 0 01-.75.75zm0-9.311L19.939 12H14.56l2.69 2.689z"}})])
          )
        }
      }
    