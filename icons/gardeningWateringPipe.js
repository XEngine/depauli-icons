
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
            children.concat([_c('path',{attrs:{"d":"M9.75 22.75C4.374 22.75 0 18.376 0 13c0-5.17 3.97-9.386 9.092-9.726A3.013 3.013 0 0112 1h5.25a.75.75 0 01.75.75v.088l4.599.575a1.6 1.6 0 01.003 3.174L18 6.162v.088a.75.75 0 01-.75.75H12a3.017 3.017 0 01-2.894-2.223A8.222 8.222 0 001.5 13c0 4.549 3.701 8.25 8.25 8.25h6.75c2.895 0 5.25-2.355 5.25-5.25s-2.355-5.25-5.25-5.25H9.75A2.252 2.252 0 007.5 13a2.252 2.252 0 002.25 2.25h4.5a.75.75 0 010 1.5h-4.5A3.754 3.754 0 016 13a3.754 3.754 0 013.75-3.75h6.75c3.722 0 6.75 3.028 6.75 6.75s-3.028 6.75-6.75 6.75H9.75zM12 2.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h4.5v-3H12zm6 2.15l4.413-.552a.099.099 0 00.083-.086.101.101 0 00-.087-.112L18 3.35v1.3z"}})])
          )
        }
      }
    