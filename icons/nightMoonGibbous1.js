
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
            children.concat([_c('path',{attrs:{"d":"M9.795 23.962c-1.135 0-2.264-.161-3.355-.479a.75.75 0 01-.388-.267c-5.013-6.626-5.013-15.88 0-22.505A.75.75 0 016.44.444c1.093-.32 2.22-.482 3.35-.482 5.293 0 10.025 3.547 11.507 8.626a11.97 11.97 0 01.479 3.375 11.898 11.898 0 01-3.494 8.476 11.905 11.905 0 01-8.466 3.524l-.021-.001zm-2.697-1.853c.88.234 1.787.353 2.697.353a10.424 10.424 0 007.425-3.083 10.413 10.413 0 003.057-7.417 10.468 10.468 0 00-.419-2.955C18.56 4.565 14.421 1.462 9.791 1.462c-.906 0-1.812.119-2.693.354-4.397 5.993-4.397 14.3 0 20.293z"}})])
          )
        }
      }
    