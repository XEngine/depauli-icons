
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
            children.concat([_c('path',{attrs:{"d":"M12 20.25a4.511 4.511 0 01-3.75-2.022A4.511 4.511 0 014.5 20.25c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c1.517 0 2.924.775 3.75 2.022A4.511 4.511 0 0112 11.25h7.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H12zm7.5-1.5c1.654 0 3-1.346 3-3s-1.346-3-3-3h-4.152c.733.818 1.152 1.885 1.152 3s-.419 2.182-1.152 3H19.5zm-7.5-6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm-7.5 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}}),_c('path',{attrs:{"d":"M4.5 16.875a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM12 16.875a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.113.993zM19.938 10.5a.752.752 0 01-.698-.475.747.747 0 01.01-.574c.165-.38.249-.783.25-1.197 0-.802-.312-1.556-.878-2.123a2.981 2.981 0 00-2.122-.88h-4.151c.323.358.587.766.78 1.211a4.514 4.514 0 01-.003 3.589.75.75 0 11-1.376-.599 3.002 3.002 0 00-3.944-3.95 3 3 0 00-1.558 3.944.751.751 0 01-.688 1.049.749.749 0 01-.688-.452c-.478-1.102-.499-2.325-.058-3.443s1.292-1.997 2.394-2.476a4.466 4.466 0 011.74-.371A.374.374 0 019 3.75h7.5a4.477 4.477 0 013.183 1.32A4.476 4.476 0 0121 8.254c0 .621-.126 1.225-.375 1.795a.747.747 0 01-.687.451z"}}),_c('path',{attrs:{"d":"M9 9.375a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982A.717.717 0 019 9.375z"}})])
          )
        }
      }
    