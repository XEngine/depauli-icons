
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
            children.concat([_c('path',{attrs:{"d":"M21 24.013a2.252 2.252 0 01-2.25-2.25v-2.25h-.129a2.26 2.26 0 01-2.121 1.5h-2.25v.75a2.252 2.252 0 01-2.25 2.25 2.252 2.252 0 01-2.25-2.25v-.75H7.5c-.96 0-1.808-.615-2.121-1.5H5.25v2.25c0 1.241-1.009 2.25-2.25 2.25S.75 23.004.75 21.763v-5.25a3.004 3.004 0 014.5-2.598v-2.652a.71.71 0 01.031-.211l1.962-6.539H6a.75.75 0 010-1.5h3v-1.25c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v1.25h3a.75.75 0 010 1.5h-1.242l1.96 6.534a.543.543 0 01.011.047.681.681 0 01.021.168v2.652a3.004 3.004 0 014.5 2.598v5.25A2.252 2.252 0 0121 24.013zm-.75-2.25a.75.75 0 001.5 0v-2.25h-1.5v2.25zM12 18.013a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zm-9.75 3.75a.75.75 0 001.5 0v-2.25h-1.5v2.25zm14.25-2.25a.75.75 0 00.75-.75v-6.75H6.75v6.75c0 .414.336.75.75.75h2.25v-.75a2.252 2.252 0 012.25-2.25 2.252 2.252 0 012.25 2.25v.75h2.25zm5.25-1.5v-1.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v1.5h3zm-16.5 0v-1.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v1.5h3zm11.742-7.5l-1.8-6H8.808l-1.8 6h9.984zm-3.492-7.5v-1.25a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25v1.25h3z"}}),_c('path',{attrs:{"d":"M9 15.388a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM15 15.388a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.808.808 0 010-.262c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    