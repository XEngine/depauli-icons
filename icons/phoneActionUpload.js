
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M15.75 13.5C12.028 13.5 9 10.472 9 6.75S12.028 0 15.75 0s6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25S12.855 12 15.75 12 21 9.645 21 6.75 18.645 1.5 15.75 1.5z"}}),_c('path',{attrs:{"d":"M15.75 10.5a.75.75 0 01-.75-.75V5.561l-.97.97a.744.744 0 01-1.06 0 .747.747 0 010-1.061l2.25-2.25a.75.75 0 01.245-.163l.024-.009a.733.733 0 01.554.012.75.75 0 01.238.16l2.25 2.25a.746.746 0 01-.001 1.06.749.749 0 01-1.06 0l-.97-.97v4.19a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    