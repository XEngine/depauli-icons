
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
            children.concat([_c('path',{attrs:{"d":"M14.25 22a.75.75 0 01-.75-.75v-1.5h-9v1.5a.75.75 0 01-1.5 0v-1.5h-.295A2.707 2.707 0 010 17.045V5.205A2.707 2.707 0 012.705 2.5H15.3c.978 0 1.876.537 2.351 1.372l2.227-1.273a.901.901 0 01.192-.077.789.789 0 01.18-.022h2.022A1.73 1.73 0 0124 4.228v14.544a1.73 1.73 0 01-1.728 1.728H20.25a.727.727 0 01-.207-.031l-.035-.011a.722.722 0 01-.193-.098l-2.361-1.687a2.701 2.701 0 01-2.151 1.076H15v1.5a.75.75 0 01-.75.751zm8.022-3a.228.228 0 00.228-.228V4.228A.228.228 0 0022.272 4H21v15h1.272zm-2.772-.708V4.542L18 5.4v11.822l1.5 1.07zM2.705 4C2.041 4 1.5 4.541 1.5 5.205v11.84c0 .665.541 1.205 1.205 1.205H15.3c.365-.001.707-.17.932-.448L14.76 16.75H4.589A1.59 1.59 0 013 15.164V7.089c0-.424.164-.822.464-1.123.3-.3.698-.466 1.122-.466H7.5a.75.75 0 010 1.5H4.589a.086.086 0 00-.063.026.085.085 0 00-.026.062v8.073c0 .049.04.089.088.089h.941l1.242-2.576a.753.753 0 01.676-.424h3.858c.286 0 .551.167.676.424l1.242 2.576h1.029v-9c0-.058.008-.116.023-.179l.016-.053a.744.744 0 01.304-.397.434.434 0 01.032-.021l1.722-.984A1.21 1.21 0 0015.3 4H2.705zM16.5 16.15V6.257l-.75.429v8.929l.75.535zm-4.944-.9l-.723-1.5H7.917l-.723 1.5h4.362z"}}),_c('path',{attrs:{"d":"M10.5 10.75a.75.75 0 01-.75-.75v-.75H9a.75.75 0 010-1.5h.75V7a.75.75 0 011.5 0v.75H12a.75.75 0 010 1.5h-.75V10a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    