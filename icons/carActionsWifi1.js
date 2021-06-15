
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
            children.concat([_c('path',{attrs:{"d":"M6.738 6.225a.75.75 0 01-.452-1.348 9.342 9.342 0 015.603-1.878h.216c2.016 0 4.008.667 5.609 1.877a.749.749 0 11-.905 1.196 7.79 7.79 0 00-4.666-1.574l-.131.002-.144-.001a7.802 7.802 0 00-4.677 1.574.742.742 0 01-.453.152z"}}),_c('path',{attrs:{"d":"M19.893 4.087a.74.74 0 01-.452-.152 12.108 12.108 0 00-7.266-2.437l-.165.002-.172-.001c-2.617 0-5.202.865-7.279 2.436a.754.754 0 01-1.051-.146.748.748 0 01.146-1.05A13.62 13.62 0 0112.01 0l.17-.001c2.929 0 5.829.973 8.165 2.74a.748.748 0 01-.452 1.348zM19.875 18a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0 1.126 1.126 0 01.982 1.244c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM4.125 18a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.737.737 0 01-.001-.263c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.922.47.983.983a.717.717 0 01.001.262c-.06.513-.47.922-.983.983a.796.796 0 01-.13.011z"}}),_c('path',{attrs:{"d":"M21 24a2.252 2.252 0 01-2.25-2.25V21H5.25v.75C5.25 22.991 4.241 24 3 24S.75 22.991.75 21.75v-1.065A1.741 1.741 0 010 19.25V15.5a2.755 2.755 0 012.51-2.74l1.506-3.357C4.437 8.274 5.562 7.5 6.806 7.5h10.388c1.243 0 2.372.782 2.808 1.947l1.488 3.314A2.754 2.754 0 0124 15.5v3.75c0 .579-.282 1.11-.75 1.435v1.065A2.252 2.252 0 0121 24zm-.75-2.25a.75.75 0 001.5 0V21h-1.5v.75zm-18 0a.75.75 0 001.5 0V21h-1.5v.75zm.5-7.5c-.689 0-1.25.561-1.25 1.25v3.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V15.5c0-.689-.561-1.25-1.25-1.25H2.75zm17.092-1.5l-1.226-2.733C18.383 9.4 17.815 9 17.194 9H6.807c-.622 0-1.187.391-1.405.973L4.158 12.75h15.684z"}})])
          )
        }
      }
    