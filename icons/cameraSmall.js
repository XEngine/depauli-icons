
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h4.5A3.754 3.754 0 0112 3.75V6h1.5V2.25a.75.75 0 01.75-.75h6A3.754 3.754 0 0124 5.25v1.5a3.754 3.754 0 01-3.75 3.75h-6a.75.75 0 01-.75-.75V7.5H12V12c0 .827-.673 1.5-1.5 1.5H9v9c0 .827-.673 1.5-1.5 1.5H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25H7.5v-9.75a.75.75 0 01.75-.75h2.25V3.75A2.252 2.252 0 008.25 1.5h-4.5zM20.25 9a2.252 2.252 0 002.25-2.25v-1.5A2.252 2.252 0 0020.25 3H15v6h5.25z"}}),_c('path',{attrs:{"d":"M6 9C4.346 9 3 7.654 3 6s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5S5.173 7.5 6 7.5 7.5 6.827 7.5 6 6.827 4.5 6 4.5zM5.25 19.5a.75.75 0 01-.75-.75V12A.75.75 0 016 12v6.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    