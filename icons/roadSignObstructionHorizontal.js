
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
            children.concat([_c('path',{attrs:{"d":"M1.75 18.75C.785 18.75 0 17.965 0 17V7c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-3.189l-3.439 3.439h3.189zm-5.311 0l5.25-5.25-5.25-5.25H13.81l4.72 4.72a.747.747 0 010 1.061l-4.72 4.719h3.129zm-6.75 0l-4.72-4.72a.746.746 0 01.001-1.06l4.72-4.72H7.061L1.811 12l5.25 5.25h3.128zM1.5 17c0 .138.112.25.25.25h3.189L1.5 13.811V17zm10.5-.061L16.939 12 12 7.061 7.061 12 12 16.939zm10.5-6.75V7a.25.25 0 00-.25-.25h-3.189l3.439 3.439zM1.75 6.75A.25.25 0 001.5 7v3.189L4.939 6.75H1.75z"}})])
          )
        }
      }
    