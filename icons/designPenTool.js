
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zM1.5 20.25a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V7.5h-21v12.75zM22.5 6V3.75a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V6h21z"}}),_c('path',{attrs:{"d":"M15 21c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H15zm0-1.5h4.5v-3H15v3z"}}),_c('circle',{attrs:{"cx":"4.5","cy":"3.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.875","cy":"3.75","r":"1.125"}}),_c('path',{attrs:{"d":"M6 15.75a.751.751 0 01-.36-1.409l8.25-4.5a.75.75 0 01.719 1.317l-8.25 4.5A.746.746 0 016 15.75z"}})])
          )
        }
      }
    