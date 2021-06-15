
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
            children.concat([_c('path',{attrs:{"d":"M9 24c-.827 0-1.5-.673-1.5-1.5v-3.749c0-.116.027-.232.079-.335L9 15.574V4.5H3c-.827 0-1.5-.673-1.5-1.5V1.5C1.5.673 2.173 0 3 0h18c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5h-6v11.074l1.421 2.842c.052.104.079.22.079.335V22.5c0 .827-.673 1.5-1.5 1.5H9zm0-1.5h6v-3.572l-1.213-2.427h-3.573L9 22.5zm4.5-7.5v-1.5h-3l3 1.5zm0-3V4.5c0-.827.673-1.5 1.5-1.5h6V1.5H3V3h6c.827 0 1.5.673 1.5 1.5V12h3z"}})])
          )
        }
      }
    