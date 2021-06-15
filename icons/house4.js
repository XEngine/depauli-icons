
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
            children.concat([_c('path',{attrs:{"d":"M1.5 10.494a.75.75 0 01-.488-1.319l10.5-9a.748.748 0 01.976 0l10.5 9a.747.747 0 01.082 1.057.748.748 0 01-1.058.081L12 1.732 1.988 10.313a.746.746 0 01-.488.181z"}}),_c('path',{attrs:{"d":"M14.25 23.993a.75.75 0 01-.75-.75v-6.75h-3v6.75a.75.75 0 01-.75.75H3.978a1.736 1.736 0 01-1.728-1.726V13.41a1.96 1.96 0 01.617-1.349l8.646-7.387a.748.748 0 01.974 0l8.623 7.367c.386.358.609.825.638 1.326l.001 8.899a1.737 1.737 0 01-1.726 1.727H14.25zM3.864 13.181a.427.427 0 00-.115.273l.001 8.811a.23.23 0 00.23.228H9v-6.26a1.245 1.245 0 011.236-1.24h3.525A1.245 1.245 0 0115 16.232v6.261h5.022a.23.23 0 00.228-.23v-8.852a.423.423 0 00-.137-.25L12 6.23l-8.136 6.951z"}})])
          )
        }
      }
    