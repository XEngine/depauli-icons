
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
            children.concat([_c('path',{attrs:{"d":"M8.242 19.398a.75.75 0 01-.686-.46L.056 1.04A.747.747 0 01.747 0c.104 0 .204.021.3.062l17.249 7.5a.751.751 0 01.035 1.36l-6.272 3.12-3.129 6.916a.752.752 0 01-.683.441h-.005zm.032-2.628l2.529-5.59a.748.748 0 01.349-.362l5.069-2.522-14.06-6.114L8.274 16.77zM23.247 24a.75.75 0 01-.75-.75v-2.063a5.42 5.42 0 00-5.389-5.437h-2.861a.75.75 0 010-1.5h2.864c3.813.016 6.901 3.13 6.886 6.94v2.06a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    