
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
            children.concat([_c('path',{attrs:{"d":"M21.75 15a.75.75 0 01-.75-.75V3.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v10.5a.75.75 0 01-1.5 0V3.75A2.252 2.252 0 013.75 1.5h16.5a2.252 2.252 0 012.25 2.25v10.5a.75.75 0 01-.75.75zM3.75 22.5A3.754 3.754 0 010 18.75v-1.5a.75.75 0 01.75-.75h8.666a.75.75 0 01.651.378 2.23 2.23 0 001.928 1.121c.8 0 1.542-.43 1.937-1.121a.753.753 0 01.651-.378h8.666a.75.75 0 01.75.75v1.5a3.754 3.754 0 01-3.75 3.75H3.75zM1.5 18.75A2.252 2.252 0 003.75 21h16.5a2.252 2.252 0 002.25-2.25V18h-7.512a3.732 3.732 0 01-5.976 0H1.5v.75z"}}),_c('path',{attrs:{"d":"M7.5 15a.75.75 0 010-1.5h.75V6c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v7.5h.75a.75.75 0 010 1.5h-9zm6.75-1.5V12H12a.75.75 0 010-1.5h2.25V9H12a.75.75 0 010-1.5h2.25V6h-4.5v7.5h4.5z"}})])
          )
        }
      }
    