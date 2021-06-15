
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.998a.75.75 0 01-.75-.75V1.498H12v21.75a.75.75 0 01-1.5 0v-8.25h-3c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5h15.75a.75.75 0 010 1.5H18v21.75a.75.75 0 01-.75.75zM7.5 1.498c-3.308 0-6 2.692-6 6s2.692 6 6 6h3v-12h-3z"}})])
          )
        }
      }
    