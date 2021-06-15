
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
            children.concat([_c('path',{attrs:{"d":"M7.25 15.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v2.25h4.5V11.5a.75.75 0 011.5 0v3a.75.75 0 01-.75.75h-6zM5.75 10a.75.75 0 01-.48-1.326l4.5-3.75a.753.753 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-4.02-3.35-4.02 3.35a.75.75 0 01-.48.174z"}}),_c('path',{attrs:{"d":"M23 23.5a.743.743 0 01-.53-.22l-5.88-5.88a9.712 9.712 0 01-6.34 2.35C4.874 19.75.5 15.376.5 10S4.874.25 10.25.25 20 4.624 20 10a9.712 9.712 0 01-2.35 6.34l5.88 5.88a.744.744 0 010 1.06.749.749 0 01-.53.22zM10.25 1.75C5.701 1.75 2 5.451 2 10s3.701 8.25 8.25 8.25S18.5 14.549 18.5 10s-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    