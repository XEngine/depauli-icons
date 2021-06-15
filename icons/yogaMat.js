
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24A4.505 4.505 0 010 19.5v-15C0 2.019 2.019 0 4.5 0S9 2.019 9 4.5v15a4.502 4.502 0 01-1.152 3H21.75a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-10.5a.75.75 0 010-1.5h10.5A2.252 2.252 0 0124 6v15.75A2.252 2.252 0 0121.75 24H4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-15c-1.654 0-3 1.346-3 3v11.652C2.318 15.419 3.384 15 4.5 15s2.182.419 3 1.152V4.5c0-1.654-1.346-3-3-3z"}}),_c('path',{attrs:{"d":"M4.5 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011z"}})])
          )
        }
      }
    