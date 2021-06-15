
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
            children.concat([_c('path',{attrs:{"d":"M9.378 21.002a.748.748 0 01-.711-.513l-1.5-4.5a.751.751 0 01.711-.987h8.292l.74-2.465a.755.755 0 01.934-.504.748.748 0 01.503.934l-2.25 7.5a.746.746 0 01-.718.535H9.378zm5.441-1.5l.9-3H8.918l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"9.753","cy":"22.877","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.003","cy":"22.877","r":"1.125"}}),_c('path',{attrs:{"d":"M12.378 13.502a.745.745 0 01-.268-.05l-.016-.006a.739.739 0 01-.247-.165l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.97.97V7.502a.75.75 0 011.5 0v3.439l.97-.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.415.415 0 01-.044.038.733.733 0 01-.198.125l-.027.01a.705.705 0 01-.26.048z"}}),_c('path',{attrs:{"d":"M17.188 10.309a.753.753 0 01-.701-.484.747.747 0 01.436-.967 2.244 2.244 0 00.646-3.821 2.21 2.21 0 00-1.639-.514 2.231 2.231 0 00-1.523.796.749.749 0 01-1.322-.413 3.729 3.729 0 00-2.029-3.003 3.707 3.707 0 00-1.7-.41c-1.42 0-2.702.783-3.346 2.044A3.752 3.752 0 007.644 8.58a.752.752 0 01.327 1.01.747.747 0 01-1.01.326 5.256 5.256 0 01-2.287-7.063A5.234 5.234 0 019.358-.008a5.25 5.25 0 014.943 3.497 3.744 3.744 0 014.229.397 3.714 3.714 0 011.327 2.539A3.718 3.718 0 0119 9.16a3.758 3.758 0 01-1.547 1.1.75.75 0 01-.265.049z"}})])
          )
        }
      }
    