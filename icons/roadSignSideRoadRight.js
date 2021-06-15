
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
            children.concat([_c('path',{attrs:{"d":"M12.002 23.998a1.8 1.8 0 01-1.282-.53L.532 13.281c-.342-.342-.53-.797-.53-1.282s.188-.94.53-1.282L10.72.529c.342-.343.798-.531 1.282-.531s.94.189 1.282.531l10.187 10.187c.343.342.531.798.531 1.282s-.189.939-.531 1.282L13.283 23.468c-.341.342-.797.53-1.281.53zm0-22.5a.31.31 0 00-.222.092L1.593 11.777a.314.314 0 000 .443L11.78 22.407a.311.311 0 00.222.091.31.31 0 00.221-.091L22.41 12.22a.308.308 0 00.092-.221.306.306 0 00-.092-.221L12.223 1.59a.308.308 0 00-.221-.092z"}}),_c('path',{attrs:{"d":"M11.251 18.749a.75.75 0 01-.75-.75v-12a.75.75 0 011.5 0v4.786l4.085 2.043a.75.75 0 01-.67 1.342l-3.415-1.708v5.536a.751.751 0 01-.75.751z"}})])
          )
        }
      }
    