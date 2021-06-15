
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
            children.concat([_c('path',{attrs:{"d":"M8.256 24.002a1.506 1.506 0 01-1.506-1.497v-9.003H3.758a1.506 1.506 0 01-1.057-.429 1.502 1.502 0 01-.11-2.019L10.824.566c.297-.36.725-.562 1.18-.562a1.508 1.508 0 011.162.548l8.253 10.514c.246.301.362.689.322 1.087-.04.398-.233.757-.543 1.011a1.506 1.506 0 01-.95.339H17.25v9a1.507 1.507 0 01-1.503 1.5H8.256zM12 1.502c-.006 0-.008.003-.009.004l-8.23 10.486 3.739.01a.75.75 0 01.75.75v9.749l7.494.001.006-9.75a.75.75 0 01.75-.75h3.742l.015-.006-8.26-10.504.003.01z"}})])
          )
        }
      }
    