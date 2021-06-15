
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
            children.concat([_c('path',{attrs:{"d":"M21.75 22.5a.75.75 0 01-.75-.75V21H3v.75a.75.75 0 01-1.5 0v-.879A2.258 2.258 0 010 18.75v-15A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v15c0 .96-.615 1.808-1.5 2.121v.879a.75.75 0 01-.75.75zM1.5 18.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V15h-21v3.75zm21-5.25V9h-21v4.5h21zm0-6V3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V7.5h21z"}}),_c('path',{attrs:{"d":"M11.25 6a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 12a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    