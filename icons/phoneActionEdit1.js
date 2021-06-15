
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
            children.concat([_c('path',{attrs:{"d":"M3.747 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 013.747 0h7.5a3.754 3.754 0 013.75 3.75V6a.75.75 0 01-1.5 0V3.75c0-1.241-1.01-2.25-2.25-2.25h-7.5a2.252 2.252 0 00-2.25 2.25V18h12v-.75a.75.75 0 011.5 0v3a3.754 3.754 0 01-3.75 3.75h-7.5zm-2.25-3.75a2.252 2.252 0 002.25 2.25h7.5a2.252 2.252 0 002.25-2.25v-.75h-12v.75z"}}),_c('path',{attrs:{"d":"M11.671 15.327a.743.743 0 01-.53-.22.746.746 0 01-.205-.677l.441-2.207c.087-.437.3-.834.615-1.149l8.164-8.164a2.233 2.233 0 011.591-.659c.598 0 1.161.232 1.585.652.884.884.884 2.312.007 3.189l-8.165 8.164a2.226 2.226 0 01-1.15.615l-2.205.442a.832.832 0 01-.148.014zm1.381-3.193a.749.749 0 00-.205.383l-.22 1.103 1.103-.221a.75.75 0 00.383-.204l.74-.74-1.061-1.061-.74.74zm2.861-.739l4.772-4.772-1.062-1.059-4.771 4.77 1.061 1.061zm5.834-5.834l.531-.531a.752.752 0 00-.531-1.281c-.2 0-.388.078-.53.219l-.53.53 1.06 1.063z"}})])
          )
        }
      }
    