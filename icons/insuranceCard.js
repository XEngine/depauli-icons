
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21.75A2.252 2.252 0 010 19.5v-15a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 4.5v15a2.252 2.252 0 01-2.25 2.25H2.25zM1.5 19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V8.25h-21V19.5zm21-12.75V4.5a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v2.25h21z"}}),_c('path',{attrs:{"d":"M14.25 12.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 17.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM7.5 18a.75.75 0 01-.75-.75V15H4.5a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H8.25v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    