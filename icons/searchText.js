
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
            children.concat([_c('path',{attrs:{"d":"M23.25 23.998a.743.743 0 01-.53-.22l-6.63-6.63a9.712 9.712 0 01-6.34 2.35c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75 9.75 4.374 9.75 9.75a9.712 9.712 0 01-2.35 6.34l6.63 6.63a.744.744 0 010 1.06.749.749 0 01-.53.22zm-13.5-22.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25S18 14.297 18 9.748s-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M9.75 16.498a.75.75 0 01-.75-.75v-6.75H6c-.401 0-.779.157-1.062.44s-.438.661-.438 1.061a.75.75 0 01-1.5.002 2.978 2.978 0 01.877-2.122 2.982 2.982 0 012.12-.881H13.5c1.654 0 3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5h-3v6.75a.75.75 0 01-.75.75zM6.719 23.998a.75.75 0 010-1.5H9v-.75a.75.75 0 011.5 0v.75h2.219a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    