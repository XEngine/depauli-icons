
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
            children.concat([_c('path',{attrs:{"d":"M9.75 4.463a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM6.75 17.963a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM14.25 17.963a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M17.25 23.963a2.252 2.252 0 01-2.25-2.25v-.75H9v.75c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25v-.879A2.258 2.258 0 013 18.713v-9.75h-.75a.75.75 0 00-.75.75v4.5a.75.75 0 01-1.5 0v-4.5a2.252 2.252 0 012.25-2.25H3v-2.25a5.256 5.256 0 015.25-5.25h7.5A5.256 5.256 0 0121 5.213v2.25h.75A2.252 2.252 0 0124 9.713v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75H21v9.75c0 .96-.615 1.808-1.5 2.121v.879a2.252 2.252 0 01-2.25 2.25zm-.75-2.25a.75.75 0 001.5 0v-.75h-1.5v.75zm-10.5 0a.75.75 0 001.5 0v-.75H6v.75zm-1.5-3c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-3.75h-15v3.75zm15-5.25v-6h-15v6h15zm0-7.5v-.75a3.754 3.754 0 00-3.75-3.75h-7.5a3.754 3.754 0 00-3.75 3.75v.75h15z"}})])
          )
        }
      }
    