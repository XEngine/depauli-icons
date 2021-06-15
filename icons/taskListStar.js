
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
            children.concat([_c('path',{attrs:{"d":"M13.363 24.011a1.542 1.542 0 01-1.333-.769 1.547 1.547 0 01-.089-1.357l1.203-2.763-2.097-1.464a.786.786 0 01-.068-.053 1.486 1.486 0 01-.128-2.095c.282-.318.687-.5 1.113-.5l.055.001h2.454l1.361-3.586a.673.673 0 01.04-.087 1.544 1.544 0 012.097-.636c.271.145.491.365.636.636a.711.711 0 01.04.089l1.357 3.584h2.514c.373 0 .729.14 1.005.395.291.269.46.635.476 1.032a1.478 1.478 0 01-.569 1.225l-2.093 1.461 1.197 2.751a1.543 1.543 0 01-.825 2.019 1.54 1.54 0 01-1.356-.089l-3.114-1.75-3.119 1.754a1.52 1.52 0 01-.757.202zm3.877-3.567a.75.75 0 01.367.096l3.49 1.961.027.009c.028-.009.038-.034.031-.05l-1.437-3.302a.751.751 0 01.259-.914l2.483-1.733h-2.972a.753.753 0 01-.701-.484l-1.512-3.994a.142.142 0 01-.01-.009l-.147-.363.096.317.013.005-.006.017.006.02a.046.046 0 00-.017.009l-1.517 3.998a.755.755 0 01-.701.484h-2.968l2.483 1.733a.75.75 0 01.258.914l-1.443 3.314c.001 0 .002.011.007.021a.03.03 0 00.021.016l.031-.006 3.49-1.963a.763.763 0 01.369-.096zM5.25 11.261a.75.75 0 010-1.5H12a.75.75 0 010 1.5H5.25zM5.25 15.011a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25zM5.25 18.761a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H5.25z"}}),_c('path',{attrs:{"d":"M2.25 24.011A2.252 2.252 0 010 21.761V6.011a2.252 2.252 0 012.25-2.25h3.063C5.675 1.632 7.561.011 9.75.011c2.19 0 4.076 1.621 4.437 3.75h3.063a2.252 2.252 0 012.25 2.25v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 00-.75-.75H13.5a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-.75.75H2.25a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75H9a.75.75 0 010 1.5H2.25z"}}),_c('circle',{attrs:{"cx":"9.75","cy":"4.136","r":"1.125"}})])
          )
        }
      }
    