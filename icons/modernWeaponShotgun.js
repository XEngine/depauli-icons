
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
            children.concat([_c('path',{attrs:{"d":"M2.296 23.931a1.51 1.51 0 01-1.495-1.316l-.749-7.006a6.8 6.8 0 013.802-6.992L21.315.195c.172-.083.355-.125.544-.125.48 0 .925.279 1.134.71l.877 1.82c.146.302.165.643.055.96a1.251 1.251 0 01-.64.718l-5.013 2.418.551 1.143c.205.425.232.904.077 1.349a1.753 1.753 0 01-.9 1.008l-5.865 2.828a.408.408 0 01-.05.029l-1.484.716v2.324a2.257 2.257 0 01-1.426 2.104l-2.326.926.11.857a2.267 2.267 0 01-1.235 2.465L2.95 23.781a1.52 1.52 0 01-.654.15zm-.005-1.491l2.782-1.345a.763.763 0 00.413-.842.451.451 0 01-.009-.055l-.479-3.73-3.181 1.534.474 4.438zm4.362-4.853l1.967-.783a.763.763 0 00.481-.712v-1.6l-2.68 1.293.232 1.802zM4.506 9.968a5.31 5.31 0 00-2.964 5.466l.105.983 3.636-1.754a.523.523 0 01.057-.023l4.154-2.003a.865.865 0 01.075-.036l1.189-.573-1.987-4.117-4.265 2.057zm7.601 1.404l5.241-2.528a.261.261 0 00.135-.151.26.26 0 00-.012-.203l-.551-1.143-5.48 2.643.667 1.382zM10.788 8.64l11.625-5.607-.666-1.381-11.625 5.607.666 1.381z"}})])
          )
        }
      }
    