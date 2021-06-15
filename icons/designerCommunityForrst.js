
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
            children.concat([_c('path',{attrs:{"d":"M1.36 23.43a1.26 1.26 0 001.05.57h8.12a.75.75 0 00.75-.75V15.7h1.46v7.55a.75.75 0 00.75.75h8.1a1.27 1.27 0 001.16-1.78L13.18.76a1.27 1.27 0 00-2.32 0L1.25 22.23a1.26 1.26 0 00.11 1.2zM12 1.84l9.23 20.66h-7v-2.08L17.11 19a.75.75 0 00-.68-1.34l-2.19 1.12v-.67l1.38-.75a.75.75 0 10-.71-1.36l-.67.36v-1.41a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v2.35l-1.16-.62A.75.75 0 107.92 18l1.87 1v3.5h-7z"}})])
          )
        }
      }
    