
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
            children.concat([_c('path',{attrs:{"d":"M23.25 1H.76a.75.75 0 00-.76.73v20.54a.72.72 0 000 .2.72.72 0 000 .12.73.73 0 000 .08l.07.07.12.11a.72.72 0 00.13.09.74.74 0 00.39.06h22.54a.73.73 0 00.33-.09.73.73 0 00.23-.21.73.73 0 00.13-.39V1.73a.75.75 0 00-.69-.73zm-.75 17.63L15.6 2.48h6.9zM8.43 2.48L1.51 18.59V2.48zm6 19l-1.75-4.38a.75.75 0 00-.7-.47H9.41L12 11.14l4.73 10.37zm3.89 0L12.67 9a.75.75 0 00-.67-.4.75.75 0 00-.7.4l-3.75 8a.75.75 0 00.68 1.07h3.24l1.37 3.39h-11l8.18-19H14l8.14 19z"}})])
          )
        }
      }
    