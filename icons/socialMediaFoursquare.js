
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
            children.concat([_c('path',{attrs:{"d":"M23.52.06a.75.75 0 00-.82.19L14 9.71l-3.18-3.13a.75.75 0 00-1.05 0L8.3 8a4.92 4.92 0 00-6.84 7.07.74.74 0 00.21.59l8.1 8.06a.75.75 0 001.06 0l8.06-8.06a.75.75 0 000-1.06l-1.23-1.23 6.08-5.24a.75.75 0 00.26-.51V.76a.75.75 0 00-.48-.7zM10.3 8.17l2.7 2.65-2.72 3-.66-.74a4.8 4.8 0 00-.42-3.8zm7 7l-7 7-5.7-5.65h.32a4.79 4.79 0 001.33-.19l3.52 3a.75.75 0 001 0l5.76-5zm5.2-7.9L10.26 17.81l-3.35-2.87a.75.75 0 00-.76-.13 3.43 3.43 0 111.94-1.88.75.75 0 00.13.79l1.52 1.69a.75.75 0 00.55.25.78.78 0 00.56-.24L22.5 2.69z"}})])
          )
        }
      }
    