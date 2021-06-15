
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75v-.75H5.25v.75a.75.75 0 01-1.5 0v-.879a2.258 2.258 0 01-1.5-2.121v-18A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v18c0 .96-.615 1.808-1.5 2.121v.879a.75.75 0 01-.75.75zm0-3a.75.75 0 00.75-.75v-18a.75.75 0 00-.75-.75h-3.75V21h3.75zM4.5 1.5a.75.75 0 00-.75.75v18c0 .414.336.75.75.75h9.75V1.5H4.5z"}}),_c('path',{attrs:{"d":"M6 16.5a.75.75 0 01-.75-.75v-12A.75.75 0 016 3h6a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H6zm5.25-1.5V4.5h-4.5V15h4.5zM6 19.5A.75.75 0 016 18h6a.75.75 0 010 1.5H6zM18 6a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 0118 6zM18 10.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM18 19.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    