
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
            children.concat([_c('path',{attrs:{"d":"M8 24.013a3.754 3.754 0 01-3.75-3.75v-16.5A3.754 3.754 0 018 .013h7.5a3.754 3.754 0 013.75 3.75v16.5a3.754 3.754 0 01-3.75 3.75H8zm-2.25-3.75A2.252 2.252 0 008 22.513h7.5a2.252 2.252 0 002.25-2.25v-.75h-12v.75zm12-2.25V3.763a2.252 2.252 0 00-2.25-2.25H8a2.252 2.252 0 00-2.25 2.25v14.25h12z"}}),_c('path',{attrs:{"d":"M9.5 15.013a2.252 2.252 0 01-2.25-2.25c0-.96.615-1.807 1.5-2.121V8.134a2.26 2.26 0 01-1.5-2.121c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25c0 .96-.615 1.808-1.5 2.121v2.507a2.259 2.259 0 011.5 2.121 2.252 2.252 0 01-2.25 2.251zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm0-6.75a.75.75 0 100 1.5.75.75 0 000-1.5zM14 6.763a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H14zM14 13.513a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H14z"}})])
          )
        }
      }
    