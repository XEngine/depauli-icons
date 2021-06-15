
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
            children.concat([_c('path',{attrs:{"d":"M8.932 24c-.965 0-1.75-.785-1.75-1.75V19.5a3.766 3.766 0 01-3.589-2.72l-1.694-5.93a3.748 3.748 0 01.974-3.704.749.749 0 011.061.009.752.752 0 01-.008 1.061 2.247 2.247 0 00-.585 2.222l1.694 5.93A2.259 2.259 0 007.198 18h11.234a2.252 2.252 0 002.25-2.25V5.25a3.754 3.754 0 00-3.75-3.75h-6.511a3.754 3.754 0 00-3.677 4.486l1.174 5.867a.747.747 0 01-.735.897.751.751 0 01-.735-.603L5.272 6.28A5.256 5.256 0 0110.42 0h6.511a5.256 5.256 0 015.25 5.25v10.5a3.743 3.743 0 01-3 3.673v2.827c0 .965-.785 1.75-1.75 1.75H8.932zm-.25-1.75c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V19.5h-9v2.75z"}})])
          )
        }
      }
    