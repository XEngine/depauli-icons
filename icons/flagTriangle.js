
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
            children.concat([_c('path',{attrs:{"d":"M5.626 24a.75.75 0 01-.75-.75V.75A.748.748 0 015.899.051L17.758 4.68c.536.237.948.646 1.175 1.157.244.549.259 1.161.043 1.721a2.234 2.234 0 01-1.187 1.248L6.376 13.262v9.988a.75.75 0 01-.75.75zm.75-12.348l10.836-4.23a.735.735 0 00.365-.403.74.74 0 00-.015-.573.742.742 0 00-.381-.381L6.376 1.848v9.804z"}})])
          )
        }
      }
    