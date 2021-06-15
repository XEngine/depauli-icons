
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM12 19.5a.75.75 0 01-.485-.178c-.317-.269-7.765-6.633-7.765-11.072C3.75 3.701 7.451 0 12 0s8.25 3.701 8.25 8.25c0 4.442-7.448 10.804-7.765 11.072A.75.75 0 0112 19.5zm0-18a6.758 6.758 0 00-6.75 6.75c0 .583.329 3.755 6.75 9.5 6.421-5.748 6.75-8.917 6.75-9.5A6.758 6.758 0 0012 1.5z"}})])
          )
        }
      }
    