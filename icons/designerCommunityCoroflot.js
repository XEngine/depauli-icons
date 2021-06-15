
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.46 8.7a5.87 5.87 0 00-1.14.12c-1.5-3-5-7.38-9.57-6.19a4.44 4.44 0 00.16-2 .75.75 0 00-1.49.21 2.21 2.21 0 01-.49 2 1.84 1.84 0 01-1.42.44.75.75 0 10-.28 1.47 2.52 2.52 0 00.48 0 3.42 3.42 0 002-.71c3.52 1.55 3.65 6.06 3.59 7.51a6.41 6.41 0 107.91 9h.22a5.92 5.92 0 100-11.85zM7.25 3.95c3.35 0 5.76 3.78 6.62 5.37a5.93 5.93 0 00-2.27 1.94 6 6 0 00-1.75-.05c.04-2.21-.51-5.28-2.6-7.26zm3.3 18.55a4.92 4.92 0 114.92-4.92 4.92 4.92 0 01-4.92 4.92zM16.8 19a6.38 6.38 0 00-3.66-7.3A4.41 4.41 0 1116.8 19z"}}),_c('circle',{attrs:{"cx":"8.57","cy":"15.46","r":".99"}})])
          )
        }
      }
    