
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
            children.concat([_c('path',{attrs:{"d":"M14.75 20.75c-.689 0-1.25-.561-1.25-1.25v-4h-3v4c0 .689-.561 1.25-1.25 1.25h-2c-.689 0-1.25-.561-1.25-1.25V14H.75a.75.75 0 010-1.5h5.359c.16-.364.487-.635.876-.721L7.5 6.463V4.5c0-.965.785-1.75 1.75-1.75h5.5c.965 0 1.75.785 1.75 1.75v1.963l.516 5.316c.388.086.716.357.876.721h5.359a.75.75 0 11-.001 1.5H18v5.5c0 .689-.561 1.25-1.25 1.25h-2zm1.75-1.5V17H15v2.25h1.5zm-7.5 0V17H7.5v2.25H9zm7.5-3.75v-2.25H15v2.25h1.5zm-7.5 0v-2.25H7.5v2.25H9zm4.5-1.5v-1c0-.689.561-1.25 1.25-1.25h.756l-.437-4.5H8.931l-.437 4.5h.756c.689 0 1.25.561 1.25 1.25v1h3zM15 5.75V4.5a.25.25 0 00-.25-.25h-5.5A.25.25 0 009 4.5v1.25h6z"}}),_c('path',{attrs:{"d":"M2.625 17.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.68.68 0 01-.129.012zM2.625 20.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.68.68 0 01-.129.012zM21.375 17.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM21.375 20.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}})])
          )
        }
      }
    