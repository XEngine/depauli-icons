
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
            children.concat([_c('path',{attrs:{"d":"M2.13 18.81a.71.71 0 00.06.11 12 12 0 0017.2 2.49h.05A12 12 0 0024 12.59v-2.06a.75.75 0 00-.75-.75h-9.78a.75.75 0 00-.75.75v4.17a.75.75 0 00.75.75h3.34A5.93 5.93 0 1112 6.08a5.87 5.87 0 014.3 1.87.75.75 0 001.06 0l3.35-3.13a.75.75 0 000-1.06A12 12 0 002 5.37a11.95 11.95 0 00.14 13.42zM2.79 7l2.45 2a7.33 7.33 0 000 6.22l-2.32 2.03A10.44 10.44 0 012.79 7zm11.43 7v-2.72h8.28v1.27a10.45 10.45 0 01-3.45 7.23L17 17.47A7.38 7.38 0 0018.79 15a.75.75 0 00-.69-1.05zM12 19.42a7.43 7.43 0 003.8-1.06l2.08 2.35a10.48 10.48 0 01-14.09-2.2l2.28-2.05A7.41 7.41 0 0012 19.42zM12 1.5a10.54 10.54 0 017.12 2.78L16.85 6.4A7.41 7.41 0 006 7.62L3.62 5.7A10.48 10.48 0 0112 1.5z"}})])
          )
        }
      }
    