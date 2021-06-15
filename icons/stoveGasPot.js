
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
            children.concat([_c('path',{attrs:{"d":"M7.75 16.5c-.965 0-1.75-.785-1.75-1.75V7.5H3.75a.75.75 0 010-1.5H6V4.5h-.75a.75.75 0 010-1.5h3.077c.35-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3h3.077a.75.75 0 010 1.5H18V6h2.25a.75.75 0 010 1.5H18v7.25c0 .965-.785 1.75-1.75 1.75h-8.5zm-.25-1.75c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V4.5h-9v10.25zM14.118 3C13.805 2.121 12.96 1.5 12 1.5s-1.805.621-2.118 1.5h4.236zM6 24a.75.75 0 01-.656-1.113l1.121-2.021a1.59 1.59 0 011.419-.802c.488 0 .96.234 1.264.625l.087.118c.007.009.04.026.076.026.083-.003.101-.035.107-.045l1.101-1.984a.664.664 0 01.051-.079 1.76 1.76 0 011.698-.704c.468.072.881.321 1.161.703a.818.818 0 01.051.079l1.111 2.002c.005.009.03.026.064.027l.027.001a.114.114 0 00.097-.044l.059-.081a1.618 1.618 0 011.405-.639 1.558 1.558 0 011.284.783l1.129 2.036a.746.746 0 01-.292 1.019.75.75 0 01-1.02-.293l-1.121-2.021c-.005-.009-.03-.026-.062-.027l-.028-.001a.117.117 0 00-.097.044l-.059.081a1.62 1.62 0 01-1.405.639 1.563 1.563 0 01-1.285-.781L12.2 19.586a.266.266 0 00-.158-.083c-.016-.002-.03-.004-.044-.004a.264.264 0 00-.197.087l-1.079 1.945a1.592 1.592 0 01-1.419.802c-.488 0-.961-.234-1.265-.625l-.088-.118a.127.127 0 00-.082-.026c-.076.003-.094.034-.1.044l-1.113 2.006A.748.748 0 016 24z"}})])
          )
        }
      }
    