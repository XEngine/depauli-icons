
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
            children.concat([_c('path',{attrs:{"d":"M3.368 24a2.252 2.252 0 01-2.25-2.25V2.25c0-1.241 1.01-2.25 2.25-2.25h17.25a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25H3.368zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h17.25a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H3.368z"}}),_c('path',{attrs:{"d":"M12.139 21a.745.745 0 01-.45-.15l-1.956-1.467a.75.75 0 01.899-1.201l1.506 1.13 1.507-1.13a.746.746 0 011.049.15c.12.16.171.357.142.556a.742.742 0 01-.293.494l-1.957 1.467a.724.724 0 01-.447.151zM5.781 6a.75.75 0 010-1.5h12.717a.75.75 0 010 1.5H5.781zM5.781 9a.75.75 0 010-1.5h12.717a.75.75 0 010 1.5H5.781zM5.781 12a.75.75 0 010-1.5h12.717a.75.75 0 010 1.5H5.781zM5.781 15a.75.75 0 010-1.5h8.315a.75.75 0 010 1.5H5.781z"}})])
          )
        }
      }
    