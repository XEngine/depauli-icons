
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 010-1.5h.75v-12C.673 4.5 0 3.827 0 3V1.5C0 .673.673 0 1.5 0H21c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5v3.75a.75.75 0 01-1.5 0V4.5H3v12h5.25a.75.75 0 010 1.5H.75zM1.5 3H21V1.5H1.5V3z"}}),_c('circle',{attrs:{"cx":"15.375","cy":"14.625","r":"1.125"}}),_c('path',{attrs:{"d":"M12.75 24a2.253 2.253 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v9A2.252 2.252 0 0121.75 24h-9zm9-1.5a.75.75 0 00.75-.75v-.523l-2.265-3.398-2 2.852a.755.755 0 01-.613.319.748.748 0 01-.47-.165l-1.235-.989L14.15 22.5h7.6zm-9-10.5a.75.75 0 00-.75.75v9c0 .286.161.538.406.664l2.262-3.399a1.52 1.52 0 011.246-.668c.342 0 .676.117.941.33l.611.489 1.542-2.197a1.503 1.503 0 011.525-.61c.392.079.73.306.952.639l1.016 1.525V12.75a.75.75 0 00-.75-.75H12.75z"}})])
          )
        }
      }
    