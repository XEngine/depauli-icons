
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
            children.concat([_c('path',{attrs:{"d":"M4.91 20.41a.75.75 0 010-1.5H18.1L3.47 4.28c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53C3.611 3.078 3.8 3 4 3s.389.078.53.22l14.63 14.63V4.66a.75.75 0 011.5 0v15a.767.767 0 01-.046.258l-.006.016a.76.76 0 01-.412.419l-.026.01a.733.733 0 01-.259.047H4.91z"}})])
          )
        }
      }
    