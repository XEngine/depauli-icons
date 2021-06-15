
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
            children.concat([_c('path',{attrs:{"d":"M20.25 22.5a2.252 2.252 0 01-2.121-3H5.871a2.252 2.252 0 01-2.121 3 2.252 2.252 0 01-2.121-3H.75a.75.75 0 010-1.5h1.761A6.739 6.739 0 010 12.75 6.758 6.758 0 016.75 6h6.75V3h-.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5H18v3.042c3.392.376 6 3.256 6 6.708A6.739 6.739 0 0121.489 18h1.761a.75.75 0 010 1.5h-.879a2.252 2.252 0 01-2.121 3zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-16.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm13.5-1.5a5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25H12V18h5.25zm-6.75 0v-1.5h-3V18h3zM6 7.555a5.262 5.262 0 00-4.5 5.195A5.263 5.263 0 006 17.945V7.555zM10.5 15v-1.5h-3V15h3zm0-3v-1.5h-3V12h3zm0-3V7.5h-3V9h3zm6-3V3H15v3h1.5z"}})])
          )
        }
      }
    