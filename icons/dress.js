
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
            children.concat([_c('path',{attrs:{"d":"M6 24c-.827 0-1.5-.673-1.5-1.5v-6c0-2.268 1.444-4.112 2.765-5.323-1.707-2.205-1.669-5.38.139-7.534a.718.718 0 01.096-.095V.75a.75.75 0 011.5 0v3.355a4.46 4.46 0 002.995 1.145A4.474 4.474 0 0015 4.105V.75a.75.75 0 011.5 0v2.798c.034.028.066.06.095.094 1.809 2.154 1.847 5.328.14 7.534 1.321 1.21 2.765 3.052 2.765 5.324v6c0 .827-.673 1.5-1.5 1.5H6zm2.597-12C7.74 12.734 6 14.473 6 16.5v6h12v-6c0-2.031-1.74-3.768-2.597-4.5H8.597zm6.757-1.5a4.516 4.516 0 00.567-5.207 5.935 5.935 0 01-3.916 1.457 5.946 5.946 0 01-3.926-1.457 4.516 4.516 0 00.567 5.207h6.708z"}})])
          )
        }
      }
    