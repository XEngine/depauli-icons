
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
            children.concat([_c('path',{attrs:{"d":"M22.507 20.59c-.183 0-.363-.033-.535-.1a28.213 28.213 0 00-9.879-1.771h-.173c-3.412 0-6.743.596-9.9 1.771a1.488 1.488 0 01-1.592-.351A1.48 1.48 0 010 19.082V4.91a1.493 1.493 0 011.497-1.502c.203 0 .401.041.589.121a25.817 25.817 0 009.895 1.691 25.88 25.88 0 009.959-1.702c.161-.07.36-.109.561-.109a1.49 1.49 0 011.063.442c.283.284.437.66.436 1.06V19.09a1.488 1.488 0 01-.885 1.37 1.49 1.49 0 01-.608.13zM1.5 19.088a29.504 29.504 0 0110.352-1.868h.295c3.546 0 7.03.628 10.356 1.868L22.5 4.909A27.35 27.35 0 0111.981 6.72a27.295 27.295 0 01-10.457-1.8l-.026-.009.002 14.177z"}})])
          )
        }
      }
    