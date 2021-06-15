
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
            children.concat([_c('path',{attrs:{"d":"M7.522 21.574c-.231 0-.463-.054-.669-.157l-3.751-1.875a1.49 1.49 0 01-.83-1.342v-5.074c0-.572.318-1.087.83-1.342l3.67-1.835V4.871c0-.572.318-1.087.831-1.342l3.75-1.871a1.506 1.506 0 011.339-.001l3.751 1.876c.511.256.829.769.83 1.341v5.073l3.67 1.835c.511.256.829.77.83 1.341v5.074a1.496 1.496 0 01-.83 1.342l-3.75 1.875a1.513 1.513 0 01-1.34.001L12.022 19.5l-3.83 1.917a1.506 1.506 0 01-.67.157zm-3.749-8.449V18.2l3.75 1.875 3.75-1.877v-5.073l-3.75-1.875-3.75 1.875zm12.75 6.948l3.749-1.875v-5.073l-3.75-1.875-3.75 1.874v5.074l3.751 1.875zm-4.501-8.254l3.75-1.871V4.875L12.022 3l-3.75 1.871v5.072l3.75 1.876z"}})])
          )
        }
      }
    