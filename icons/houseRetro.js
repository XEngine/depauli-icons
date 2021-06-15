
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5h.75v-9H.75a.748.748 0 01-.735-.897l1.259-6.294A2.249 2.249 0 013 3.803V2.25a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5v1.5h1.312L10.2 1.9a2.23 2.23 0 011.798-.899c.706 0 1.38.336 1.802.899l1.387 1.85H16.5v-1.5a.75.75 0 010-1.5H21a.75.75 0 010 1.5v1.553c.863.188 1.549.87 1.726 1.756l1.259 6.294a.749.749 0 01-.735.897h-.75v9h.75a.75.75 0 010 1.5H.75zM21 21.75v-9h-.75a.75.75 0 010-1.5h2.085l-1.079-5.397a.752.752 0 00-.736-.603h-4.208L19.35 9.3a.75.75 0 01-1.2.9L18 10v11.75h3zm-4.5 0V8l-3.9-5.2a.746.746 0 00-1.05-.15.761.761 0 00-.15.15L7.5 8v13.75H9V16.5a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0115 16.5v5.25h1.5zm-3 0V16.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v5.25h3zm-7.5 0V10l-.15.2a.753.753 0 01-1.05.15.75.75 0 01-.15-1.05l3.037-4.05H3.48a.753.753 0 00-.736.603l-1.08 5.397H3.75a.75.75 0 010 1.5H3v9h3zm13.5-18v-1.5H18v1.5h1.5zM6 3.75v-1.5H4.5v1.5H6z"}}),_c('path',{attrs:{"d":"M12 10.875a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.922-.983.983a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    