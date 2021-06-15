
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
            children.concat([_c('path',{attrs:{"d":"M15.75 20.25c-4.549 0-8.25-3.701-8.25-8.25s3.701-8.25 8.25-8.25S24 7.451 24 12s-3.701 8.25-8.25 8.25zm0-15C12.028 5.25 9 8.278 9 12s3.028 6.75 6.75 6.75S22.5 15.722 22.5 12s-3.028-6.75-6.75-6.75zM.75 10.5a.75.75 0 010-1.5h4.891a.75.75 0 010 1.5H.75zM.75 15a.75.75 0 010-1.5h4.891c.414 0 .75.336.75.75S.75 15 .75 15zM3.75 5.25a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H3.75zM3.75 20.25a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H3.75z"}})])
          )
        }
      }
    