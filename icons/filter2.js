
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
            children.concat([_c('path',{attrs:{"d":"M10.402 24.05a.746.746 0 01-.183-.023c-.757-.189-1.267-.803-1.267-1.527V12.396C4.001 11.115.359 6.736.054 1.645.052 1.161.212.747.502.457a1.402 1.402 0 011-.407h21c.786 0 1.45.71 1.45 1.55l-.002.057c-.407 5.093-4.089 9.466-8.998 10.739V22.5c0 .97-.788 1.55-1.55 1.55h-3zm3-1.5c.016 0 .04-.01.045-.016a.088.088 0 00.005-.034V11.8c0-.355.252-.664.6-.735 4.556-.93 8.006-4.825 8.398-9.479a.152.152 0 00-.012-.036H1.555c-.001.014-.003.031-.003.05.279 4.623 3.692 8.525 8.3 9.465.348.071.6.38.6.735v10.7c.003.009.025.031.068.05h2.882z"}})])
          )
        }
      }
    