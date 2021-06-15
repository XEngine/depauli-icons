
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12.749 19.19c-.401 0-.777-.156-1.06-.44L10.5 17.56a1.486 1.486 0 01-.439-1.061c0-.4.156-.777.44-1.06l.438-.439H6c-.827 0-1.5-.673-1.5-1.5v-3C4.5 9.673 5.173 9 6 9h4.939l-.439-.44a1.486 1.486 0 01-.439-1.061c0-.4.156-.776.44-1.06l1.19-1.19c.284-.283.66-.439 1.06-.439.401 0 .778.156 1.061.44l5.688 5.69a1.502 1.502 0 010 2.121l-5.69 5.689c-.283.284-.66.44-1.061.44zM6 13.5h6.75a.75.75 0 01.53 1.28l-1.72 1.72 1.19 1.189L18.44 12l-5.69-5.69-1.19 1.19 1.72 1.719a.75.75 0 01-.53 1.281H6v3z"}})])
          )
        }
      }
    