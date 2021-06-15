
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
            children.concat([_c('path',{attrs:{"d":"M10.5 24.004a.749.749 0 01-.74-.627l-.703-4.216a2.076 2.076 0 01-.158-.107l-2-1.5a2.26 2.26 0 01-.9-1.8V3.169a2.221 2.221 0 011.225-2.012A10.511 10.511 0 0112 .007c1.658 0 3.31.398 4.778 1.151A2.223 2.223 0 0118 3.178v12.577a2.26 2.26 0 01-.9 1.8l-2 1.5c-.05.038-.103.073-.158.107l-.702 4.216a.747.747 0 01-.74.627h-3zm2.365-1.5l.5-3h-2.729l.5 3h1.729zM7.5 15.754c0 .235.112.459.3.6l2 1.5c.129.097.289.15.45.15h3.5a.753.753 0 00.45-.15l2-1.5a.753.753 0 00.3-.6v-3.75h-2.25v1.5a2.252 2.252 0 01-2.25 2.25 2.252 2.252 0 01-2.25-2.25v-1.5H7.5v3.75zm3.75-2.25a.75.75 0 001.5 0v-1.5h-1.5v1.5zm5.25-3v-1.5h-9v1.5h9zm0-3V3.169a.742.742 0 00-.404-.676A9.028 9.028 0 0012 1.507a9.01 9.01 0 00-4.094.986.736.736 0 00-.406.668v4.343h9z"}})])
          )
        }
      }
    