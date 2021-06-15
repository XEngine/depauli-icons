
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.252 2.252 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.252 2.252 0 0121.75 20H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M8.25 15.5a3.754 3.754 0 01-3.75-3.75A3.754 3.754 0 018.25 8h7.5a3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75h-7.5zm0-6A2.252 2.252 0 006 11.75 2.252 2.252 0 008.25 14h7.5A2.252 2.252 0 0018 11.75a2.252 2.252 0 00-2.25-2.25h-7.5z"}}),_c('path',{attrs:{"d":"M12 12.875a.796.796 0 01-.13-.011 1.127 1.127 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}})])
          )
        }
      }
    