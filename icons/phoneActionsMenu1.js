
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
            children.concat([_c('path',{attrs:{"d":"M13.42 23.266c-2.876 0-5.868-1.533-8.891-4.558C-.401 13.777-1.362 8.937 1.75 4.71a2.236 2.236 0 011.798-.898c.608 0 1.177.238 1.602.669l3.09 3.09a2.253 2.253 0 010 3.182l-1.591 1.591a3.728 3.728 0 01-2.652 1.097 3.732 3.732 0 01-1.783-.448c.672 1.522 1.803 3.083 3.375 4.655 1.572 1.573 3.133 2.704 4.656 3.376a3.758 3.758 0 01.646-4.437l1.591-1.591c.425-.425.99-.658 1.592-.658.602 0 1.167.234 1.591.658l3.094 3.095a2.254 2.254 0 01-.224 3.391c-1.611 1.185-3.33 1.784-5.115 1.784zm-.568-1.542c.198.017.396.026.591.026 1.458 0 2.87-.495 4.196-1.47a.746.746 0 00.064-1.125l-3.098-3.099a.748.748 0 00-1.061 0l-1.592 1.591a2.253 2.253 0 000 3.182l.9.895zM2.407 11.284c.424.424.989.657 1.59.657.602 0 1.167-.233 1.591-.657l1.591-1.591a.75.75 0 000-1.06L4.086 5.538a.752.752 0 00-1.135.07C1.85 7.104 1.365 8.713 1.513 10.389l.894.895zM17.226 2.256a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM17.226 6.756a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM17.226 11.256a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM12.726 2.256a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM12.726 6.756a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM12.726 11.256a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    