
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
            children.concat([_c('path',{attrs:{"d":"M19.5 23.625a.748.748 0 01-.711-.513l-1.329-3.987H6.541l-1.329 3.987a.748.748 0 01-1.382.098.746.746 0 01-.041-.573l1.21-3.631a2.251 2.251 0 01-1.486-1.659L1.64 8.625H.75a.75.75 0 010-1.5h13.5v-3a.75.75 0 01.75-.75v-2.25a.75.75 0 011.5 0v2.25h.959l.579-1.737a.747.747 0 01.95-.474.747.747 0 01.474.948l-.438 1.314c.278.11.476.382.476.699v3h3.75a.75.75 0 010 1.5h-.898l-.982 4.576a.75.75 0 01-.036.167l-.854 3.978a2.255 2.255 0 01-1.479 1.657l1.211 3.634a.75.75 0 01-.712.988zm-1.214-6a.755.755 0 00.727-.593l.678-3.157H11.25v3.75h7.036zm-13.307-.592a.754.754 0 00.733.592H9.75v-9H3.174l1.805 8.408zm15.034-4.658l.805-3.75H11.25v3.75h8.763zM18 7.125v-2.25h-2.25v2.25H18z"}}),_c('path',{attrs:{"d":"M6 11.625a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H6z"}})])
          )
        }
      }
    