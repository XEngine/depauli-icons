
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25v-1.5A.75.75 0 01.75 18h.75V9.75A3.754 3.754 0 015.25 6h8.25V3c0-1.654 1.346-3 3-3H21c1.654 0 3 1.346 3 3v9a3.017 3.017 0 01-1.5 2.594V18h.75a.75.75 0 01.75.75v1.5A3.754 3.754 0 0120.25 24H3.75zM1.5 20.25a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-.75h-7.512a3.732 3.732 0 01-5.976 0H1.5v.75zM9.416 18a.75.75 0 01.651.378 2.23 2.23 0 001.928 1.121c.8 0 1.542-.43 1.937-1.121a.755.755 0 01.652-.378H21v-3h-4.5c-1.654 0-3-1.346-3-3V7.5H5.25A2.252 2.252 0 003 9.75V18h6.416zM15 12c0 .827.673 1.5 1.5 1.5H21c.827 0 1.5-.673 1.5-1.5H15zm7.5-1.5v-6H15v6h7.5zm0-7.5c0-.827-.673-1.5-1.5-1.5h-4.5c-.827 0-1.5.673-1.5 1.5h7.5z"}})])
          )
        }
      }
    