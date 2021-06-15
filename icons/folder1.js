
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
            children.concat([_c('path',{attrs:{"d":"M5.25 19.5A2.252 2.252 0 013 17.25V6.75A2.252 2.252 0 015.25 4.5h2.379c.601 0 1.166.234 1.591.658l.841.842h8.689A2.252 2.252 0 0121 8.25v9a2.252 2.252 0 01-2.25 2.25H5.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.745.745 0 01-.531-.22l-1.06-1.061A.744.744 0 007.63 6H5.25z"}})])
          )
        }
      }
    