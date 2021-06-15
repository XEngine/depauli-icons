
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24a.75.75 0 010-1.5h9.75v-3H5.438c-.99-.058-1.737-.883-1.687-1.839l-.001-7.415-1.708 1.784a.753.753 0 01-1.061.023.75.75 0 01-.023-1.06L11.121.381a1.211 1.211 0 011.77.014L23.04 10.991a.741.741 0 01.208.535.745.745 0 01-.75.734.75.75 0 01-.542-.232l-1.708-1.783V17.7c.049.924-.687 1.74-1.641 1.799l-5.857.001v3h9.75a.75.75 0 010 1.5h-21zm3.75-6.3c-.008.169.095.293.234.302L9 18v-4.5a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0115 13.5V18h3.563c.082-.006.195-.119.188-.261L18.75 8.68 12 1.633 5.25 8.68v9.02zm8.25.3v-4.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V18h3z"}})])
          )
        }
      }
    