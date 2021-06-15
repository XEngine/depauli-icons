
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
            children.concat([_c('path',{attrs:{"d":"M4 24c-.965 0-1.75-.785-1.75-1.75V1.75C2.25.785 3.035 0 4 0h16c.965 0 1.75.785 1.75 1.75v20.5c0 .965-.785 1.75-1.75 1.75H4zM4 1.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h16a.25.25 0 00.25-.25V1.75A.25.25 0 0020 1.5H4z"}}),_c('path',{attrs:{"d":"M6 4.875a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982A.717.717 0 016 4.875zM18 21.375a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM12.126 17.168a1.492 1.492 0 01-1.25-.668l-2.361-3.315a1.509 1.509 0 01-.013-1.683l2.389-3.354a1.49 1.49 0 011.529-.62c.391.078.728.303.95.632l2.365 3.322c.348.521.35 1.177.013 1.683l-2.389 3.353a1.488 1.488 0 01-1.233.65zm-.015-1.519l.016.02 2.373-3.335-2.373-3.333-2.375 3.333 2.359 3.315z"}})])
          )
        }
      }
    