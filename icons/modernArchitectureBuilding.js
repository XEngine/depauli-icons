
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.907a.75.75 0 010-1.5H4.5v-8.25c0-1.035.115-2.077.343-3.097a14.171 14.171 0 011.103-3.149.753.753 0 01.095-.185 14.372 14.372 0 012.026-2.988.751.751 0 01.152-.166A14.25 14.25 0 0116.97.017a2.22 2.22 0 011.66.457 2.234 2.234 0 01.87 1.776v20.157h3.75a.75.75 0 010 1.5H.75zm17.25-1.5V2.25a.75.75 0 00-.843-.744 12.61 12.61 0 00-6.611 2.901h3.704a.75.75 0 010 1.5H9.04c-.401.472-.769.974-1.098 1.5h4.808a.75.75 0 010 1.5H7.137c-.221.486-.411.989-.569 1.5h7.682a.75.75 0 010 1.5H6.203c-.089.494-.148.996-.178 1.5h6.725a.75.75 0 010 1.5H6v7.5h12z"}})])
          )
        }
      }
    