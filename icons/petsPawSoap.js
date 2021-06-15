
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
            children.concat([_c('path',{attrs:{"d":"M12 13.842a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.983a.808.808 0 010 .262 1.126 1.126 0 01-1.113.992zM9 15.342a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM15 15.342a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.114.993zM10.5 19.5a1.489 1.489 0 01-1.057-.438 1.489 1.489 0 01-.441-1.06 1.489 1.489 0 01.5-1.118l1.475-1.169c.279-.26.642-.403 1.024-.403.383 0 .746.143 1.024.404l1.472 1.166A1.492 1.492 0 0115 17.995a1.503 1.503 0 01-1.497 1.506H10.5zm2.993-1.5l-1.428-1.132a.686.686 0 01-.064-.057.68.68 0 01-.062.056l-1.428 1.132 2.982.001z"}}),_c('path',{attrs:{"d":"M7 24c-.965 0-1.75-.785-1.75-1.75v-13c0-.965.785-1.75 1.75-1.75h.786l.878-1.756A2.24 2.24 0 0110.677 4.5h.573v-3H8.714l-.543 1.085a.746.746 0 01-1.006.336.75.75 0 01-.336-1.006l.75-1.5A.746.746 0 018.25 0H15a.75.75 0 010 1.5h-2.25v3h.573c.858 0 1.629.476 2.013 1.244l.878 1.756H17c.965 0 1.75.785 1.75 1.75v13c0 .965-.785 1.75-1.75 1.75H7zM7 9a.25.25 0 00-.25.25v13c0 .138.112.25.25.25h10a.25.25 0 00.25-.25v-13A.25.25 0 0017 9H7zm7.537-1.5l-.542-1.086A.75.75 0 0013.323 6h-2.646a.746.746 0 00-.671.415L9.463 7.5h5.074z"}})])
          )
        }
      }
    