
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
            children.concat([_c('path',{attrs:{"d":"M6.75 23.625a2.252 2.252 0 01-2.25-2.25v-12a5.282 5.282 0 012.25-4.287v-.963a5.256 5.256 0 00-5.25 5.25v10.5a.75.75 0 01-1.5 0v-10.5C0 5.89 2.655 3.013 6.048 2.661L4.8 1.725a.75.75 0 01.899-1.2l2.8 2.1H15v-.75c0-.387.29-.708.675-.746l7.5-.75c.025-.002.05-.004.074-.004a.749.749 0 01.751.75v4.5a.748.748 0 01-.824.746l-7.501-.75A.747.747 0 0115 4.875v-.75h-2.25v.963A5.28 5.28 0 0115 9.373v12.002a2.252 2.252 0 01-2.25 2.25h-6zM8.25 5.5a.752.752 0 01-.377.651A3.74 3.74 0 006 9.377v11.998c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-2.25H9.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h3.75v-.75a3.741 3.741 0 00-1.873-3.225.75.75 0 01-.377-.65V4.125h-3V5.5zm5.25 12.125v-6h-3v6h3zm9-12.829V1.954l-6 .6v1.643l6 .599z"}})])
          )
        }
      }
    