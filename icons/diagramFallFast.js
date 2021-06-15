
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
            children.concat([_c('path',{attrs:{"d":"M20.249 24a.74.74 0 01-.551-.245.418.418 0 01-.036-.04l-2.998-3.748a.75.75 0 011.171-.938L19.5 21.11v-6.66a3.198 3.198 0 00-3.168-3.2h-11.7a4.605 4.605 0 01-3.25-1.334A4.605 4.605 0 01.001 6.648V.75a.75.75 0 011.5 0v5.87c.006.848.338 1.64.934 2.228.59.582 1.371.902 2.2.902h11.703a4.703 4.703 0 014.663 4.702v6.66l1.665-2.081a.749.749 0 111.171.938l-3 3.75-.035.039a.723.723 0 01-.187.147c-.02.011-.038.021-.056.029a.81.81 0 01-.103.037l-.044.012a.852.852 0 01-.163.017z"}})])
          )
        }
      }
    