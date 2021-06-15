
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
            children.concat([_c('path',{attrs:{"d":"M11.248 14.998a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M.748 17.998a.75.75 0 010-1.5h11.251c1.654 0 3-1.346 3-3s-1.346-3-3-3H.748a.75.75 0 010-1.5h11.251c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H.748zM19.868 23.998a.75.75 0 01-.609-1.188 17.316 17.316 0 003.216-10.984 17.334 17.334 0 00-4.15-10.329h-.326v5.25a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H20.25a18.914 18.914 0 013.724 10.249 18.813 18.813 0 01-3.496 11.938.752.752 0 01-.61.314z"}})])
          )
        }
      }
    