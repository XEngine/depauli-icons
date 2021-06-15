
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h3.855l1.119-7.388a.688.688 0 01.036-.142 2.223 2.223 0 012.197-1.468H9.75V7.5h-1.5c-.827 0-1.5-.673-1.5-1.5V4.5c0-.827.673-1.5 1.5-1.5h1.5V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5V3h1.5c.827 0 1.5.673 1.5 1.5V6c0 .827-.673 1.5-1.5 1.5h-1.5v6h1.079l.082-.002c.926 0 1.761.592 2.079 1.472a.722.722 0 01.036.142l1.119 7.388H22.5a.75.75 0 010 1.5h-21zm15.628-1.5l-1.073-7.078a.715.715 0 00-.663-.423L13.5 15H8.671l-.054-.001a.732.732 0 00-.673.423L6.872 22.5h10.256zm-4.378-9v-6c0-.827.673-1.5 1.5-1.5h1.5V4.5h-1.5c-.827 0-1.5-.673-1.5-1.5V1.5h-1.5V3c0 .827-.673 1.5-1.5 1.5h-1.5V6h1.5c.827 0 1.5.673 1.5 1.5v6h1.5z"}})])
          )
        }
      }
    