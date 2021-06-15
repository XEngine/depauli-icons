
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
            children.concat([_c('path',{attrs:{"d":"M12 24.002a3.72 3.72 0 01-1.347-.251l-1.04-.399c-4.611-1.774-7.363-6.19-7.363-11.813V3.925A2.24 2.24 0 013.556 1.88 18.38 18.38 0 0112.007.002a18.407 18.407 0 018.458 1.888 2.228 2.228 0 011.286 2.04v7.609c0 5.623-2.752 10.039-7.363 11.813l-1.042.4a3.74 3.74 0 01-1.346.25zm.75-1.63l.057-.021 1.042-.4c3.878-1.492 6.249-5.195 6.393-9.95H12.75v10.371zM3.758 12.001c.144 4.754 2.515 8.458 6.393 9.95l1.041.4.058.021V12.001H3.758zm16.492-1.5V3.924a.742.742 0 00-.43-.68 16.989 16.989 0 00-7.07-1.74v8.997h7.5zm-9 0V1.503c-2.442.06-4.871.656-7.05 1.732a.752.752 0 00-.45.684v6.582h7.5z"}})])
          )
        }
      }
    