
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
            children.concat([_c('path',{attrs:{"d":"M5.25 23.263c-2.65 0-5.25-3.344-5.25-6.75 0-1.718.444-3.331 1.251-4.541.964-1.445 2.346-2.209 3.999-2.209H7.5v-1.25c0-.965.785-1.75 1.75-1.75h1.25V5.689L.944 8.237a.75.75 0 01-.387-1.449L10.5 4.137V3.013a.75.75 0 011.5 0v.724L23.057.789a.75.75 0 11.386 1.449L12 5.289v1.474h1.25c.965 0 1.75.785 1.75 1.75v1.25h2.25c1.653 0 3.036.764 3.999 2.209.807 1.21 1.251 2.823 1.251 4.541 0 3.406-2.601 6.75-5.25 6.75h-12zm-3.696-6c.321 2.328 2.065 4.5 3.696 4.5h12c1.631 0 3.375-2.172 3.696-4.5H1.554zm19.411-1.5c-.212-2.3-1.409-4.5-3.715-4.5H12v4.5h8.965zm-10.465 0v-4.5H5.25c-2.306 0-3.502 2.2-3.715 4.5H10.5zm3-6v-1.25a.25.25 0 00-.25-.25h-4a.25.25 0 00-.25.25v1.25h4.5z"}})])
          )
        }
      }
    