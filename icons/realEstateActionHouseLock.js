
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
            children.concat([_c('path',{attrs:{"d":"M6 20.248a2.252 2.252 0 01-2.25-2.25v-7.5a.75.75 0 011.5 0v7.5c0 .414.336.75.75.75h4.5a.75.75 0 010 1.5H6zM1.5 9.748a.75.75 0 01-.485-1.323L9.796.995a2.255 2.255 0 011.453-.534c.53 0 1.047.19 1.453.534l7.3 6.177a.746.746 0 01.088 1.057.751.751 0 01-1.057.088l-7.3-6.177a.749.749 0 00-.969-.001L1.984 9.57a.747.747 0 01-.484.178zM19.5 5.248a.75.75 0 01-.75-.75v-2.25H16.5a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3c0 .413-.337.75-.75.75zM14.5 23.248c-.965 0-1.75-.785-1.75-1.75v-5.5c0-.88.653-1.611 1.5-1.732v-.768c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.768c.847.122 1.5.852 1.5 1.732v5.5c0 .965-.785 1.75-1.75 1.75h-7zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7zm5.75-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v.75h4.5z"}}),_c('circle',{attrs:{"cx":"18","cy":"18.773","r":"1.125"}})])
          )
        }
      }
    