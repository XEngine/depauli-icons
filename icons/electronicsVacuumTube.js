
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
            children.concat([_c('path',{attrs:{"d":"M15 24a.75.75 0 01-.75-.75V19.5h-1.5v3.75a.75.75 0 01-1.5 0V19.5h-1.5v3.75a.75.75 0 01-1.5 0v-3.848A3.016 3.016 0 016 16.5V6c0-1.654 1.346-3 3-3a.737.737 0 00.75-.734A2.252 2.252 0 0112 .018a2.252 2.252 0 012.25 2.25.741.741 0 00.736.732A3.007 3.007 0 0118 6v10.5c0 1.37-.947 2.564-2.25 2.902v3.848A.75.75 0 0115 24zm-7.5-7.5c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5V15h-9v1.5zm9-3v-6H15v6h1.5zm-3 0v-3h-3v3h3zm-4.5 0V9.75A.75.75 0 019.75 9h3.75V7.5h-6v6H9zM16.5 6c0-.826-.672-1.499-1.499-1.5a2.246 2.246 0 01-2.251-2.215c0-.424-.336-.766-.75-.766s-.75.336-.75.75a2.222 2.222 0 01-.66 1.581c-.422.419-.969.65-1.541.65h-.042C8.176 4.5 7.5 5.173 7.5 6h9z"}})])
          )
        }
      }
    