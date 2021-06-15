
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
            children.concat([_c('path',{attrs:{"d":"M8.251 24.001c-.827 0-1.5-.673-1.5-1.5v-.658L3.774 9.933a.745.745 0 01.136-.644.745.745 0 01.591-.288h1.423L4.377 5.149c-.736-1.891.187-4.056 2.055-4.831A3.72 3.72 0 017.864.032c1.524 0 2.885.908 3.468 2.314l1.061 2.64.834-1.566a3.722 3.722 0 012.235-1.796 3.776 3.776 0 011.058-.153c.622 0 1.243.16 1.795.462.879.481 1.518 1.275 1.799 2.236s.171 1.975-.31 2.854l-1.055 1.978h.75c.233 0 .448.105.591.288a.745.745 0 01.136.644l-2.978 11.91v.658c0 .827-.673 1.5-1.5 1.5H8.251zm-.022-2.432a.75.75 0 01.022.182v.75h7.5v-.75c0-.062.008-.124.023-.183l2.767-11.067H5.462l2.767 11.068zm8.822-12.568l1.435-2.691a2.24 2.24 0 00.189-1.719 2.237 2.237 0 00-1.079-1.342 2.246 2.246 0 00-3.054.894l-1.417 2.662.729 1.815 1.985-3.722a.749.749 0 111.323.706L15.35 9.001h1.701zm-4.66 0L9.944 2.913a2.231 2.231 0 00-1.215-1.21 2.245 2.245 0 00-1.722.001 2.262 2.262 0 00-1.235 2.894l1.769 4.403h1.617L7.16 4.031a.748.748 0 01.696-1.03c.308 0 .581.185.696.47l2.223 5.53h1.616z"}})])
          )
        }
      }
    