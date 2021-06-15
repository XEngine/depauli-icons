
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
            children.concat([_c('path',{attrs:{"d":"M.85 16.42a.71.71 0 000 .11A12.06 12.06 0 007.27 23 12 12 0 0023 16.72 12 12 0 0016.71 1 11.93 11.93 0 007.57.86h-.1A12 12 0 00.85 16.42zm1.61-.05L6.84 12v9.15a10.56 10.56 0 01-4.38-4.78zm13.19-5.91v5.19H8.34v-5.16L12 6.83zM12 22.5a10.43 10.43 0 01-3.65-.67v-4.68h12.78A10.5 10.5 0 0112 22.5zM22.49 12a10.43 10.43 0 01-.67 3.65h-4.67V2.86A10.5 10.5 0 0122.49 12zm-6.84-9.83v6.17L9.18 1.89a10.28 10.28 0 016.47.27zm-8 .3l3.32 3.3-9.08 9.05A10.44 10.44 0 017.63 2.46z"}})])
          )
        }
      }
    