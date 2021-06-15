
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M23.25 3.42h-5a.75.75 0 00-.75.75V15h-2.25V4.17a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75V15H7.58a1.17 1.17 0 01-1.08-1.21V4.17a.75.75 0 00-.75-.75h-5a.75.75 0 00-.75.75v11.15a5.26 5.26 0 005.25 5.25h18a.75.75 0 00.75-.75V4.17a.75.75 0 00-.75-.75zm-.75 15.66H5.25a3.76 3.76 0 01-3.75-3.76V4.92H5v8.83a2.65 2.65 0 002.58 2.71H9.5a.75.75 0 00.75-.75V4.92h3.49v10.79a.75.75 0 00.75.75h3.76a.75.75 0 00.75-.75V4.92h3.5z"}})])
          )
        }
      }
    