
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.757.757 0 01-.372-.098L12 21.114l-4.878 2.788a.757.757 0 01-.815-.047.752.752 0 01-.29-.765l1.382-6.359A9.015 9.015 0 013 9c0-4.963 4.037-9 9-9s9 4.037 9 9a9.015 9.015 0 01-4.399 7.731l1.382 6.36a.75.75 0 01-.733.909zM12 19.5c.13 0 .259.034.372.099l3.787 2.164-.947-4.357A8.92 8.92 0 0112 18a8.92 8.92 0 01-3.212-.594l-.947 4.357 3.787-2.164A.748.748 0 0112 19.5zm0-18C7.865 1.5 4.5 4.865 4.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M11.25 12a.75.75 0 010-1.5H12V6h-.75a.75.75 0 010-1.5H12c.827 0 1.5.673 1.5 1.5v4.5h.75a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    