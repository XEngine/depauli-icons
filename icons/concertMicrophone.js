
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V5.982A1.753 1.753 0 010 4.25v-2.5C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v2.5c0 .88-.653 1.61-1.5 1.732V22.5h.75a.75.75 0 010 1.5H.75zM21 22.5V6H3v16.5h4.939l3.311-3.311v-5.516c-.41.367-.944.577-1.5.577A2.252 2.252 0 017.5 12c0-1.241 1.009-2.25 2.25-2.25a2.252 2.252 0 012.241 2.444l2.85 1.293a.75.75 0 01-.619 1.366l-1.472-.668v5.004l3.311 3.311H21zm-7.061 0L12 20.561 10.061 22.5h3.878zM9.75 11.25a.75.75 0 100 1.5.75.75 0 000-1.5zm12.5-6.75a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-.189l-3 3h3.189zm-7.027 0L12 1.738 8.777 4.5h6.446zM1.75 1.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h3.189l-3-3H1.75zm15.461 2.729L19.939 1.5h-5.912l3.184 2.729zm-10.422 0L9.973 1.5H4.061l2.728 2.729z"}})])
          )
        }
      }
    