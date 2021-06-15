
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
            children.concat([_c('path',{attrs:{"d":"M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6h3a.75.75 0 010 1.5h-3.19A6.022 6.022 0 0112 12zM7.762 7.5a4.48 4.48 0 004.238 3 4.48 4.48 0 004.238-3H7.762zM16.5 6c0-2.481-2.019-4.5-4.5-4.5-1.292 0-2.499.55-3.347 1.5H9.75a.75.75 0 010 1.5H7.758A4.467 4.467 0 007.5 6h9zM21.75 24a.75.75 0 01-.75-.75 8.945 8.945 0 00-4.522-7.804C16.253 17.719 14.331 19.5 12 19.5s-4.253-1.781-4.478-4.054A8.944 8.944 0 003 23.25a.75.75 0 01-1.5 0 10.488 10.488 0 016.506-9.709A10.381 10.381 0 0112 12.75a10.424 10.424 0 014.07.822 10.48 10.48 0 016.43 9.678.75.75 0 01-.75.75zM9 15c0 1.654 1.346 3 3 3s3-1.346 3-3v-.233c-.966-.343-1.973-.517-3-.517s-2.035.174-3 .517V15z"}})])
          )
        }
      }
    