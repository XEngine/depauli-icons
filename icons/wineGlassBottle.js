
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a2.252 2.252 0 01-2.25-2.25V10.371c0-.601.234-1.165.658-1.59L7.5 6.439V1.5C7.5.673 8.173 0 9 0h1.5c.827 0 1.5.673 1.5 1.5v4.939l2.341 2.341c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0L10.72 7.28a.744.744 0 01-.22-.53v-1.5H9v1.5c0 .2-.078.389-.22.53L6.219 9.841a.748.748 0 00-.219.53V21.75c0 .414.336.75.75.75h3.75a.75.75 0 010 1.5H6.75zM10.5 3.75V1.5H9v2.25h1.5z"}}),_c('path',{attrs:{"d":"M13.5 24a.75.75 0 010-1.5H15v-3.145a3.743 3.743 0 01-3-3.673V12a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v3.682a3.743 3.743 0 01-3 3.673V22.5H18a.75.75 0 010 1.5h-4.5zm0-8.318c0 1.241 1.009 2.25 2.25 2.25S18 16.923 18 15.682V12.75h-4.5v2.932z"}})])
          )
        }
      }
    