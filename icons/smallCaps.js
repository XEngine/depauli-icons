
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
            children.concat([_c('path',{attrs:{"d":"M5.25 23.248a.75.75 0 010-1.5H7.5V2.25H3c-.826 0-1.499.672-1.5 1.499A.75.75 0 010 3.747 3.004 3.004 0 013 .75h5.212L8.25.748l.04.002h5.21a3.004 3.004 0 013 2.997.75.75 0 01-1.5.002 1.502 1.502 0 00-1.5-1.499H9v19.498h2.25a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M14.219 23.248a.75.75 0 010-1.5H16.5V8.25h-3c-.826 0-1.499.672-1.5 1.499a.75.75 0 01-1.5-.002 3.003 3.003 0 013-2.997h3.712a.572.572 0 01.038-.002l.04.002H21c1.654 0 3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5h-3v13.498h2.219a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    