
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
            children.concat([_c('path',{attrs:{"d":"M3 24.003a2.252 2.252 0 01-2.25-2.25v-19.5A2.252 2.252 0 013 .003h15c.591 0 1.149.228 1.572.64l2.996 2.878c.435.425.683 1.013.682 1.615v16.616a2.252 2.252 0 01-2.25 2.25H3zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.136a.757.757 0 00-.226-.538L18.529 1.72A.758.758 0 0018 1.503H3z"}}),_c('path',{attrs:{"d":"M6 17.253a.752.752 0 01-.53-1.281l3.22-3.22-3.22-3.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.746.746 0 011.06.001l3.75 3.75a.752.752 0 010 1.061l-3.75 3.75a.746.746 0 01-.53.219zM12.75 13.503a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-5.25z"}})])
          )
        }
      }
    