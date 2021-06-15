
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
            children.concat([_c('path',{attrs:{"d":"M9.75 23.25C7.682 23.25 6 21.568 6 19.5s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S12 20.741 12 19.5s-1.009-2.25-2.25-2.25zM2.25 23.25a.75.75 0 01-.75-.75v-3.75H.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5H3v3.75a.75.75 0 01-.75.75zM15.75 18.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM10.745 14.25a9.588 9.588 0 01-8.623-5.33 1.502 1.502 0 011.342-2.17h4.322l2.793-5.585A.748.748 0 0111.585.83a.75.75 0 01.336 1.006L9.464 6.75H23.25a.75.75 0 010 1.5H3.464a8.094 8.094 0 007.281 4.5H23.25a.75.75 0 010 1.5H10.745z"}})])
          )
        }
      }
    