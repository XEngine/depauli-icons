
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
            children.concat([_c('path',{attrs:{"d":"M2.856 24.003L2.741 24a2.095 2.095 0 01-1.454-.697 2.095 2.095 0 01-.529-1.587l2-13.915a2.154 2.154 0 012.21-1.8L19.042 6l.068-.001a2.17 2.17 0 012.113 1.779l2.003 13.938a2.068 2.068 0 01.006.309 2.102 2.102 0 01-2.101 1.977c-.043 0-.085-.001-.128-.004L2.95 24a1.303 1.303 0 01-.094.003zm-.608-2.113a.6.6 0 00.155.411.602.602 0 00.419.201l.035.001.035-.001 18.156-.002.064.002a.6.6 0 00.623-.568l.001-.043-1.994-13.877a.65.65 0 00-.637-.515L4.936 7.5l-.045-.001a.664.664 0 00-.652.538L2.248 21.89zM15.677 4.557a.75.75 0 01-.736-.609A3.02 3.02 0 0011.989 1.5a3.019 3.019 0 00-2.943 2.433.749.749 0 01-.734.605.743.743 0 01-.624-.332.741.741 0 01-.113-.562A4.525 4.525 0 0111.99 0a4.526 4.526 0 014.425 3.666.752.752 0 01-.738.891z"}}),_c('path',{attrs:{"d":"M9.85 20.065c-.174 0-.346-.028-.512-.084a1.598 1.598 0 01-1.096-1.522V12.67a1.61 1.61 0 012.323-1.437l5.789 2.896c.384.192.67.522.805.929.136.407.105.842-.087 1.226a1.619 1.619 0 01-.718.718l-5.788 2.893c-.226.113-.467.17-.716.17zm-.001-7.501a.107.107 0 00-.107.107v5.787a.107.107 0 00.154.095l5.787-2.893a.107.107 0 000-.19l-5.788-2.896a.115.115 0 00-.046-.01z"}})])
          )
        }
      }
    