
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75v-.75H6.75a.75.75 0 01-.75-.75A3.755 3.755 0 019.75 18h3.075c.35-1.732 1.875-3 3.675-3h6v-.75a.75.75 0 011.5 0v9a.75.75 0 01-.75.75zm-.75-3v-4.5h-6c-.96 0-1.805.621-2.118 1.5h2.868a.75.75 0 010 1.5h-7.5c-.962 0-1.808.621-2.121 1.5H22.5zM3.321 13.5l-.058-.002A3.576 3.576 0 01.002 9.697.752.752 0 01.75 9h1.5V1.393A1.375 1.375 0 013.597 0h12.29c.773.018 1.381.65 1.364 1.41V9h1.5c.392 0 .721.306.748.698a3.576 3.576 0 01-3.257 3.8c-.024.002-.043.002-.062.002H3.321zM16.146 12a2.086 2.086 0 001.785-1.5H1.57A2.086 2.086 0 003.355 12h12.791zm-.396-3V1.5h-12V9h12z"}})])
          )
        }
      }
    