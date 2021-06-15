
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
            children.concat([_c('path',{attrs:{"d":"M6.748 18.75c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75h10.5c3.722 0 6.75 3.028 6.75 6.75s-3.028 6.75-6.75 6.75h-10.5zm0-12A5.256 5.256 0 001.498 12a5.256 5.256 0 005.25 5.25h10.5a5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25h-10.5z"}}),_c('path',{attrs:{"d":"M6.748 15.75a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM9.748 15.75a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    