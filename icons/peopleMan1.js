
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
            children.concat([_c('path',{attrs:{"d":"M12 12c-3.308 0-6-2.692-6-6 0-1.051.278-2.087.805-2.997l.009-.017A6.029 6.029 0 0112 0c3.308 0 6 2.692 6 6s-2.692 6-6 6zM7.731 4.587A4.437 4.437 0 007.5 6c0 2.481 2.019 4.5 4.5 4.5a4.506 4.506 0 004.487-4.154 9.42 9.42 0 01-2.733.404 9.59 9.59 0 01-6.023-2.163zm6.043.664c.865 0 1.731-.146 2.566-.435A4.51 4.51 0 0012 1.5c-1.39 0-2.693.642-3.545 1.732a8.042 8.042 0 005.293 2.018h.003l.023.001zM21.75 24a.75.75 0 01-.75-.75 8.945 8.945 0 00-4.522-7.804C16.253 17.719 14.331 19.5 12 19.5s-4.253-1.781-4.478-4.054A8.944 8.944 0 003 23.25a.75.75 0 01-1.5 0 10.488 10.488 0 016.506-9.709A10.381 10.381 0 0112 12.75a10.424 10.424 0 014.07.822 10.48 10.48 0 016.43 9.678.75.75 0 01-.75.75zM9 15c0 1.654 1.346 3 3 3s3-1.346 3-3v-.233c-.966-.343-1.973-.517-3-.517s-2.035.174-3 .517V15z"}})])
          )
        }
      }
    