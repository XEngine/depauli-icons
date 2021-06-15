
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
            children.concat([_c('path',{attrs:{"d":"M12.002 22.25a1.481 1.481 0 01-1.294-.76L.948 4.245A1.503 1.503 0 012.225 2h19.539c.265.004.518.074.738.201.347.2.595.524.699.911.104.387.05.791-.15 1.138l-9.759 17.242a1.473 1.473 0 01-.571.569 1.471 1.471 0 01-.719.189zm.014-1.495zm-.015-.027l9.747-17.222L2.253 3.5l9.748 17.228z"}})])
          )
        }
      }
    