
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.251 2.251 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.257 2.257 0 0121.75 20H2.25zm19.394-1.5c-.705-2.512-4.892-4.498-9.644-4.498S3.061 15.988 2.356 18.5h19.288zM12 12.502c4.768 0 8.873 1.74 10.5 4.295V5.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v11.047c1.628-2.555 5.732-4.295 10.5-4.295z"}})])
          )
        }
      }
    