
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24A2.252 2.252 0 013 21.75V16.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h16.5V5.25a.75.75 0 00-.75-.75H15V6h.75a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h.75V1.5C7.5.673 8.173 0 9 0h4.5c.827 0 1.5.673 1.5 1.5V3h3.75A2.252 2.252 0 0121 5.25V12c.827 0 1.5.673 1.5 1.5V15c0 .827-.673 1.5-1.5 1.5v5.25A2.252 2.252 0 0118.75 24H5.25zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V16.5h-15v5.25zM3 15h18v-1.5H3V15zm10.5-9V1.5H9V6h4.5z"}}),_c('circle',{attrs:{"cx":"11.25","cy":"3.75","r":"1.125"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    