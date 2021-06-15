
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
            children.concat([_c('path',{attrs:{"d":"M22.5 24a.75.75 0 01-.75-.75v-.75H2.25v.75a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0V18h2.652A3.004 3.004 0 017.5 13.5a3.004 3.004 0 012.598 4.5h1.152v-3.75a.75.75 0 01.75-.75h8.5a2.754 2.754 0 012.75 2.75v7a.75.75 0 01-.75.75zm-.75-3v-1.5H2.25V21h19.5zm0-3v-1.75c0-.689-.561-1.25-1.25-1.25h-7.75v3h9zM7.5 15c-.827 0-1.5.673-1.5 1.5S6.673 18 7.5 18 9 17.327 9 16.5 8.327 15 7.5 15zM17.25 12a.75.75 0 01-.75-.75V7.5h-1.4c-.402 0-.777-.155-1.059-.436a1.487 1.487 0 01-.431-1.248l.563-4.502A1.503 1.503 0 0115.662 0h3.176c.755 0 1.395.565 1.488 1.314l.563 4.5A1.5 1.5 0 0119.403 7.5H18v3.75a.75.75 0 01-.75.75zm-2.151-6H19.4l-.002-.021-.56-4.479h-3.175L15.099 6z"}})])
          )
        }
      }
    