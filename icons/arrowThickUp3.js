
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
            children.concat([_c('path',{attrs:{"d":"M10.5 24.001c-.827 0-1.5-.673-1.5-1.5V10.865l-3.44 3.44c-.284.283-.66.439-1.06.439A1.495 1.495 0 013 13.245V9.312c0-.601.234-1.166.658-1.591l7.281-7.28a1.49 1.49 0 011.06-.439c.401 0 .777.156 1.06.439l7.281 7.28c.426.425.66.99.66 1.592v3.932a1.492 1.492 0 01-.438 1.059c-.283.284-.66.44-1.062.44-.401 0-.777-.156-1.06-.438L15 10.865v11.636c0 .827-.673 1.5-1.5 1.5h-3zM9.75 8.304a.75.75 0 01.75.75v13.447h3V9.054a.747.747 0 01.75-.75c.2 0 .388.078.53.219l4.72 4.72V9.311a.748.748 0 00-.219-.531L12 1.501l-7.281 7.28a.75.75 0 00-.219.531v3.932l4.72-4.72a.743.743 0 01.53-.22z"}})])
          )
        }
      }
    