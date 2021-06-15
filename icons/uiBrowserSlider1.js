
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('circle',{attrs:{"cx":"7.5","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"19.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"19.875","r":"1.125"}}),_c('path',{attrs:{"d":"M5.707 12.75a.75.75 0 01-.566-.258l-1.957-2.25a.753.753 0 010-.984l1.957-2.25a.75.75 0 011.132.984L4.744 9.75l1.529 1.758a.751.751 0 01-.566 1.242zM18.293 12.75a.749.749 0 01-.566-1.242l1.529-1.758-1.529-1.758a.751.751 0 011.132-.984l1.957 2.25a.753.753 0 010 .984l-1.957 2.25a.75.75 0 01-.566.258z"}})])
          )
        }
      }
    