
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
            children.concat([_c('path',{attrs:{"d":"M21.75 23.261a.746.746 0 01-.671-.415l-1.5-3a.753.753 0 01-.079-.335v-9.75c0-1.241 1.009-2.25 2.25-2.25S24 8.52 24 9.761v9.75a.753.753 0 01-.079.335l-1.5 3.001a.747.747 0 01-.671.414zm0-2.427l.75-1.5V9.761a.75.75 0 00-1.5 0v9.573l.75 1.5zM2.25 23.261A2.252 2.252 0 010 21.011V6.761a2.252 2.252 0 012.25-2.25h2.313C4.924 2.383 6.81.761 9 .761c2.19 0 4.076 1.621 4.437 3.75h2.313A2.252 2.252 0 0118 6.761v14.25a2.252 2.252 0 01-2.25 2.25H2.25zm0-17.25a.75.75 0 00-.75.75v14.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V6.761a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75h-3z"}}),_c('circle',{attrs:{"cx":"9","cy":"4.886","r":"1.125"}})])
          )
        }
      }
    