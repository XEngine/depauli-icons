
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
            children.concat([_c('path',{attrs:{"d":"M16.501 16.498a.752.752 0 01-.53-1.281l2.47-2.47H5.562l2.47 2.47a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.737.737 0 01.009-.542.74.74 0 01.166-.249l3.749-3.749a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47H18.44l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-3.749 3.749a.736.736 0 01-.529.221zM.751 23.998a.75.75 0 01-.75-.75V.748a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM23.251 23.998a.75.75 0 01-.75-.75V.748a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    