
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.747.747 0 01-.671-.414l-3-6a.695.695 0 01-.048-.129l-.013-.048a.705.705 0 01-.018-.159V3.75C1.5 1.682 3.182 0 5.25 0S9 1.682 9 3.75v13.5a.768.768 0 01-.074.325l-3.005 6.01A.746.746 0 015.25 24zm0-2.427L7.036 18H3.464l1.786 3.573zM7.5 16.5V6H3v10.5h4.5zm0-12v-.75c0-1.241-1.009-2.25-2.25-2.25S3 2.509 3 3.75v.75h4.5zM15.75 24a.75.75 0 01-.75-.75V21h-.75a.746.746 0 01-.671-.415l-1.5-3a.965.965 0 01-.058-.164.656.656 0 01-.011-.06l-.008-.07A.622.622 0 0112 17.25V3.75a3.747 3.747 0 016.748-2.25h1.5a2.252 2.252 0 012.25 2.25V12a.75.75 0 01-1.5 0V3.75a.75.75 0 00-.75-.75h-.826c.052.248.078.499.078.75v13.5a.6.6 0 01-.002.039l-.005.055c-.006.039-.009.06-.014.081a.888.888 0 01-.042.125c-.005.012-.01.025-.016.036l-1.5 3a.747.747 0 01-.671.414h-.75v2.25a.75.75 0 01-.75.75zm1.037-4.5l.75-1.5h-3.573l.75 1.5h2.073zm1.213-3V9h-4.5v7.5H18zm0-9V3.75c0-1.241-1.009-2.25-2.25-2.25S13.5 2.509 13.5 3.75V7.5H18z"}})])
          )
        }
      }
    