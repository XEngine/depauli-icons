
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
            children.concat([_c('path',{attrs:{"d":"M5.87 12.5h2.25v10.75a.75.75 0 00.75.75h5a.75.75 0 00.75-.75V12.5h3.1a.75.75 0 00.75-.67l.42-4a.75.75 0 00-.76-.83h-3.51V5.84c0-.34.1-.35.26-.35h3a.75.75 0 00.75-.75v-4a.75.75 0 00-.76-.74h-4.33c-5 0-5.42 4.29-5.42 5.6V7H5.87a.75.75 0 00-.75.75v4a.75.75 0 00.75.75zm.75-4h2.25a.75.75 0 00.75-.75V5.6c0-1.53.51-4.1 3.92-4.1h3.58V4h-2.24a1.71 1.71 0 00-1.76 1.85v1.9a.75.75 0 00.75.75h3.43L17 11h-3.13a.75.75 0 00-.75.75V22.5h-3.5V11.75a.75.75 0 00-.75-.75H6.62z"}})])
          )
        }
      }
    