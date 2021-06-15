
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
            children.concat([_c('path',{attrs:{"d":"M5.25 17.25A5.256 5.256 0 010 12c0-2.895 2.355-5.25 5.25-5.25S10.5 9.105 10.5 12a5.21 5.21 0 01-1.583 3.75h6.166A5.21 5.21 0 0113.5 12c0-2.895 2.355-5.25 5.25-5.25S24 9.105 24 12a5.256 5.256 0 01-5.25 5.25H5.25zm13.5-9A3.754 3.754 0 0015 12c0 2.068 1.682 3.75 3.75 3.75S22.5 14.068 22.5 12a3.754 3.754 0 00-3.75-3.75zm-13.5 0A3.754 3.754 0 001.5 12c0 2.068 1.682 3.75 3.75 3.75S9 14.068 9 12a3.754 3.754 0 00-3.75-3.75z"}})])
          )
        }
      }
    