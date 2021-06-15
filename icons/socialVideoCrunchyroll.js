
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
            children.concat([_c('path',{attrs:{"d":"M12 0a12 12 0 000 24h1a.75.75 0 000-1.5 8.85 8.85 0 119.47-9.5.75.75 0 00.75.7.75.75 0 00.78-.7v-1A12 12 0 0012 0zm1.64 3.3A10.34 10.34 0 006 20.61 10.5 10.5 0 1120.61 6a10.34 10.34 0 00-6.97-2.7z"}}),_c('path',{attrs:{"d":"M17.28 8.79a.75.75 0 00.1-1.37A7.12 7.12 0 0014 6.57a7.3 7.3 0 107.13 6 .75.75 0 00-1.33-.33 2.2 2.2 0 11-2.48-3.42zm.72 5.78a3.71 3.71 0 001.68-.4 5.74 5.74 0 11-4.29-5.91A3.7 3.7 0 0018 14.57z"}})])
          )
        }
      }
    