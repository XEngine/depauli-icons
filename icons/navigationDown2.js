
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
            children.concat([_c('path',{attrs:{"d":"M12 23.997a.732.732 0 01-.248-.044.774.774 0 01-.194-.1L5.557 19.45a.747.747 0 01-.161-1.048.749.749 0 011.048-.161l4.806 3.526V5.997h-3a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-3v15.75l4.8-3.6a.749.749 0 11.9 1.2l-6 4.5a.72.72 0 01-.199.105l-.04.013a.731.731 0 01-.211.032zM8.25 1.497a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    