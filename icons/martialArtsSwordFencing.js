
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
            children.concat([_c('path',{attrs:{"d":"M.751 24a.752.752 0 01-.53-1.281l3.22-3.22-2.122-2.122a.756.756 0 01-.22-.543.756.756 0 01.239-.536 4.484 4.484 0 013.226-1.205 4.439 4.439 0 012.449.833L22.72.22c.142-.142.33-.22.531-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L8.071 16.99a4.509 4.509 0 01-.374 5.669.756.756 0 01-.535.239.763.763 0 01-.544-.22L4.5 20.56l-3.22 3.22a.74.74 0 01-.529.22zm6.305-3.005a3.004 3.004 0 00-.456-3.449 2.98 2.98 0 00-2.201-.955c-.494 0-.971.119-1.399.347l4.056 4.057z"}})])
          )
        }
      }
    