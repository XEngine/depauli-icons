
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
            children.concat([_c('path',{attrs:{"d":"M.75 17.999a.75.75 0 010-1.5h15.921a.75.75 0 00.74-.625l2.64-14.013A2.236 2.236 0 0122.266 0h.984a.75.75 0 010 1.5h-.984a.748.748 0 00-.739.625l-2.64 14.014a2.237 2.237 0 01-2.216 1.86H.75zM4.875 24c-1.447 0-2.625-1.177-2.625-2.625s1.178-2.625 2.625-2.625S7.5 19.927 7.5 21.375 6.322 24 4.875 24zm0-3.75c-.62 0-1.125.505-1.125 1.125S4.255 22.5 4.875 22.5 6 21.995 6 21.375s-.505-1.125-1.125-1.125zM14.625 24C13.177 24 12 22.823 12 21.375s1.177-2.625 2.625-2.625 2.625 1.177 2.625 2.625S16.073 24 14.625 24zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z"}})])
          )
        }
      }
    