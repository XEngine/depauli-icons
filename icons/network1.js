
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h10.5v-3.03a9.709 9.709 0 01-8.466-6.541 9.723 9.723 0 01.001-6.357A9.78 9.78 0 0111.978.001h.045c5.359.007 9.727 4.38 9.727 9.749 0 1.084-.18 2.153-.535 3.178a9.709 9.709 0 01-8.466 6.541V22.5h10.5a.75.75 0 01.001 1.5H.75zm3.903-10.5a8.274 8.274 0 005.464 4.282A12.657 12.657 0 017.968 13.5H4.653zm11.381 0a12.68 12.68 0 01-2.151 4.282 8.274 8.274 0 005.464-4.282h-3.313zm-6.498 0A11.127 11.127 0 0012 17.685a11.13 11.13 0 002.465-4.185H9.536zM19.937 12a8.214 8.214 0 000-4.5h-3.578c.115.753.163 1.516.141 2.272.022.73-.025 1.482-.139 2.228h3.576zm-5.1 0c.13-.742.185-1.49.164-2.228a11.28 11.28 0 00-.166-2.272H9.163c-.13.743-.185 1.491-.163 2.229-.022.765.034 1.523.165 2.271h5.672zm-7.196 0A12.63 12.63 0 017.5 9.729c-.022-.731.025-1.483.139-2.229H4.063a8.22 8.22 0 000 4.5h3.578zm11.706-6a8.271 8.271 0 00-5.464-4.282A12.657 12.657 0 0116.032 6h3.315zm-4.883 0A11.131 11.131 0 0012 1.816 11.128 11.128 0 009.535 6h4.929zM7.966 6a12.68 12.68 0 012.151-4.282A8.277 8.277 0 004.653 6h3.313z"}})])
          )
        }
      }
    