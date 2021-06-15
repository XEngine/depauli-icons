
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
            children.concat([_c('path',{attrs:{"d":"M6.75 23.998a.75.75 0 010-1.5h7.5a3.754 3.754 0 003.75-3.75c0-2.311-1.582-3.73-4.14-5.25H.75a.75.75 0 010-1.5h10.483C8.5 10.411 6 8.595 6 5.248c0-2.797 2.676-5.25 5.727-5.25h7.023a.75.75 0 010 1.5h-7.023c-2.419 0-4.227 1.98-4.227 3.75 0 2.936 2.729 4.471 5.618 6.096.384.216.768.433 1.149.654h8.984a.75.75 0 010 1.5h-6.685c1.517 1.164 2.935 2.789 2.935 5.25a5.256 5.256 0 01-5.25 5.25H6.75z"}})])
          )
        }
      }
    