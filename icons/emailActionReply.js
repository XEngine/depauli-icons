
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
            children.concat([_c('path',{attrs:{"d":"M23.212 24a.75.75 0 01-.75-.75 6.758 6.758 0 00-6.75-6.75h-5.25v2.163a2.254 2.254 0 01-.721 1.648 2.243 2.243 0 01-1.529.599 2.259 2.259 0 01-1.651-.719l-5.459-5.915a2.262 2.262 0 010-3.051L6.564 5.31a2.261 2.261 0 011.649-.721c.603 0 1.167.233 1.592.657.425.424.66.989.661 1.59L10.463 9h5.249c4.549 0 8.25 3.701 8.25 8.25v6a.75.75 0 01-.75.75zM8.215 6.089a.752.752 0 00-.55.24l-5.46 5.913a.754.754 0 000 1.017l5.458 5.914a.739.739 0 00.549.238.747.747 0 00.749-.748V15.75a.75.75 0 01.75-.75h6a8.298 8.298 0 016.75 3.512V17.25a6.758 6.758 0 00-6.75-6.75h-6a.745.745 0 01-.531-.22.74.74 0 01-.219-.531l.003-2.912a.744.744 0 00-.22-.529.744.744 0 00-.529-.219z"}})])
          )
        }
      }
    