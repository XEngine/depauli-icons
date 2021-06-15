
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-1.654 0-3-1.346-3-3v-3.75a.75.75 0 00-.75-.75h-3a5.213 5.213 0 01-3.712-1.538 5.215 5.215 0 01-1.512-4.237l.465-4.649A6.73 6.73 0 017.208 0h6.2a6.76 6.76 0 011.854.26l3.634 1.038c.469.134.954.202 1.442.202h2.91c.415 0 .752.336.752.75v10.5a.75.75 0 01-.75.75h-1.5A6.758 6.758 0 0015 20.25V21c0 1.654-1.346 3-3 3zM7.208 1.5a5.234 5.234 0 00-5.224 4.726l-.465 4.649a3.726 3.726 0 001.079 3.027A3.728 3.728 0 005.25 15h3a2.252 2.252 0 012.25 2.25V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-.75c0-4.549 3.701-8.25 8.25-8.25h.75V3h-2.162a6.76 6.76 0 01-1.854-.26L14.85 1.702a5.253 5.253 0 00-1.442-.202h-6.2z"}})])
          )
        }
      }
    