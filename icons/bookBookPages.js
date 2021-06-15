
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
            children.concat([_c('path',{attrs:{"d":"M15 23.764c-.203 0-.405-.028-.601-.082l-10.5-2.917a2.255 2.255 0 01-1.649-2.163V2.487A2.252 2.252 0 014.5.237h15a2.252 2.252 0 012.25 2.25v15.75a2.252 2.252 0 01-2.25 2.25h-2.25v1.026c0 .601-.234 1.166-.659 1.591a2.237 2.237 0 01-1.591.66zM4.493 1.737a.751.751 0 00-.743.75V18.6c.001.334.227.63.55.719l10.501 2.917a.758.758 0 00.729-.192.745.745 0 00.22-.531V5.877a.75.75 0 00-.55-.722l-10.53-3.4a.828.828 0 00-.166-.018h-.011zM19.5 18.987a.75.75 0 00.75-.75V2.487a.75.75 0 00-.75-.75H9.495l6.135 1.981c.947.261 1.619 1.151 1.62 2.158v13.11h2.25z"}})])
          )
        }
      }
    