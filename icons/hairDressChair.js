
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-3H9A3.747 3.747 0 016.002 18H6a3.754 3.754 0 01-3.75-3.75V12H1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v2.25c0 .989.651 1.843 1.556 2.137a3.687 3.687 0 01-.056-.637A.75.75 0 016 15h.75V2.75A2.754 2.754 0 019.5 0h5a2.754 2.754 0 012.75 2.75V15H18a.75.75 0 01.75.75c0 .213-.019.426-.056.637a2.255 2.255 0 001.556-2.137V12h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v2.25A3.754 3.754 0 0118 18h-.002A3.744 3.744 0 0115 19.5h-2.25v3h3.75a.75.75 0 010 1.5h-9zm-.621-7.5A2.264 2.264 0 009 18h6c.962 0 1.808-.621 2.121-1.5H6.879zM15.75 15V2.75c0-.689-.561-1.25-1.25-1.25h-5c-.689 0-1.25.561-1.25 1.25V15h7.5z"}})])
          )
        }
      }
    