
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
            children.concat([_c('path',{attrs:{"d":"M10.875 24c-.827 0-1.5-.673-1.5-1.5v-2.25H8.328a2.236 2.236 0 01-2.196-1.762L5.023 13.5h-.648c-.965 0-1.75-.785-1.75-1.75v-10C2.625.785 3.41 0 4.375 0h15.25c.965 0 1.75.785 1.75 1.75v10c0 .965-.785 1.75-1.75 1.75h-.648l-1.109 4.988a2.236 2.236 0 01-2.196 1.762h-1.047v2.25c0 .827-.673 1.5-1.5 1.5h-2.25zm0-1.5h2.25v-2.25h-2.25v2.25zm-3.279-4.338a.747.747 0 00.732.588h7.344a.744.744 0 00.731-.587L17.44 13.5H6.56l1.036 4.662zM4.375 1.5a.25.25 0 00-.25.25v10c0 .138.112.25.25.25h15.25a.25.25 0 00.25-.25v-10a.25.25 0 00-.25-.25H4.375z"}}),_c('circle',{attrs:{"cx":"13.5","cy":"16.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"4.147","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"4.147","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"4.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"8.647","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"8.647","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"8.625","r":"1.125"}})])
          )
        }
      }
    