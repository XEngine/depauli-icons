
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
            children.concat([_c('path',{attrs:{"d":"M12 12c-3.308 0-6-2.692-6-6 0-1.051.278-2.087.805-2.997l.009-.017A6.029 6.029 0 0112 0c3.308 0 6 2.692 6 6s-2.692 6-6 6zM7.731 4.587A4.437 4.437 0 007.5 6c0 2.481 2.019 4.5 4.5 4.5a4.507 4.507 0 004.487-4.154 9.448 9.448 0 01-2.727.404h-.02a9.588 9.588 0 01-6.009-2.163zm.724-1.355a8.042 8.042 0 005.293 2.018c.887 0 1.757-.146 2.592-.434A4.51 4.51 0 0012 1.5c-1.39 0-2.693.642-3.545 1.732zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    