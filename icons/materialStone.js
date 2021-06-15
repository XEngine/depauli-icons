
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
            children.concat([_c('path',{attrs:{"d":"M.789 24a.75.75 0 01-.746-.822l1.44-14.873a.733.733 0 01.023-.25l.583-6.028A2.245 2.245 0 014.328 0h15.344c1.16 0 2.122.871 2.238 2.025l2.047 21.153a.748.748 0 01-.746.822H.789zm21.596-1.5l-.581-6h-4.216l.4 6h4.397zm-5.901 0l-.4-6H7.988l-.4 6h8.896zm-10.4 0l.4-6H2.196l-.581 6h4.469zM21.659 15l-.581-6h-8.292l8.873 6zm-10.373 0V9H2.922l-.581 6h8.945zm9.647-7.5l-.516-5.328a.746.746 0 00-.745-.672h-3.084l.4 6h3.945zm-5.449 0l-.4-6H8.988l-.4 6h6.896zm-8.4 0l.4-6H4.328a.747.747 0 00-.746.675L3.067 7.5h4.017z"}})])
          )
        }
      }
    