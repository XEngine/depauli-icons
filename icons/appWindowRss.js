
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M8.26 19.128a1.127 1.127 0 010-2.253 1.132 1.132 0 011.125 1.128c0 .62-.505 1.125-1.125 1.125zM16.51 19.503a.75.75 0 01-.75-.75c0-4.549-3.701-8.25-8.25-8.25a.75.75 0 010-1.5c5.376 0 9.75 4.374 9.75 9.75a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M12.76 19.5a.75.75 0 01-.75-.75c0-2.481-2.019-4.5-4.5-4.5a.75.75 0 010-1.5c3.308 0 6 2.692 6 6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    