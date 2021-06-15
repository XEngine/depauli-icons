
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
            children.concat([_c('path',{attrs:{"d":"M3.501 23.25a1.508 1.508 0 01-1.5-1.475V2.236c.004-.265.074-.518.201-.738A1.49 1.49 0 013.503.747c.261 0 .52.07.748.202l17.242 9.759a1.482 1.482 0 01.7 1.695c-.108.38-.358.695-.703.887L4.245 23.052a1.502 1.502 0 01-.719.198H3.501zm0-1.488l17.227-9.763-17.227-9.75v19.513zm17.254-9.778z"}})])
          )
        }
      }
    