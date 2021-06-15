
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-1.654 0-3-1.346-3-3v-3.221a9.397 9.397 0 01-6-8.781C3 4.037 7.037 0 12 0s9 4.037 9 9a9.395 9.395 0 01-6 8.779V21c0 1.654-1.346 3-3 3zm-1.5-3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5h-3zm3-1.5V18h-3v1.5h3zm-.75-3v-6h-1.5v6h1.5zm1.5-.043a7.868 7.868 0 005.25-7.454C19.5 4.865 16.135 1.5 12 1.5S4.5 4.865 4.5 9a7.87 7.87 0 005.25 7.457V10.5H9c-1.241 0-2.25-1.009-2.25-2.25S7.759 6 9 6s2.25 1.009 2.25 2.25V9h1.5v-.75C12.75 7.009 13.759 6 15 6s2.25 1.009 2.25 2.25S16.241 10.5 15 10.5h-.75v5.957zM15 9a.75.75 0 10-.75-.75V9H15zM9 7.5A.75.75 0 009 9h.75v-.75A.75.75 0 009 7.5z"}})])
          )
        }
      }
    