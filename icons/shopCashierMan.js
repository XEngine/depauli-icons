
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
            children.concat([_c('path',{attrs:{"d":"M12 9.75a4.88 4.88 0 01-4.875-4.875c0-.839.221-1.669.639-2.404.017-.035.035-.061.046-.077A4.9 4.9 0 0112 0c2.384 0 4.449 1.774 4.812 4.13a.75.75 0 01.025.166c.025.212.038.401.038.579A4.88 4.88 0 0112 9.75zM8.73 4.037A3.379 3.379 0 0012 8.25a3.38 3.38 0 003.339-2.883 7.595 7.595 0 01-6.609-1.33zm.709-1.353a6.166 6.166 0 003.935 1.441c.63 0 1.245-.095 1.838-.282A3.396 3.396 0 0012 1.5c-.987 0-1.922.437-2.561 1.184z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75v-4.456a6.215 6.215 0 00-5.273 4.641.749.749 0 11-1.454-.37 7.707 7.707 0 015.579-5.579 7.691 7.691 0 015.843.848 7.664 7.664 0 013.532 4.731.752.752 0 01-.726.935.748.748 0 01-.727-.565 6.171 6.171 0 00-2.845-3.812 6.238 6.238 0 00-2.428-.831v4.458a.752.752 0 01-.751.75zM21.75 24a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v3a.75.75 0 01-1.5 0v-3A2.252 2.252 0 013.75 18h16.5a2.252 2.252 0 012.25 2.25v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    