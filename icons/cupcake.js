
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
            children.concat([_c('path',{attrs:{"d":"M7.377 24a2.295 2.295 0 01-2.255-1.81l-1.065-4.772a4.202 4.202 0 01-1.349-.911 4.22 4.22 0 01-1.235-3.009c0-3.306 2.518-5.879 6.754-6.923a3.75 3.75 0 012.984-3.495c.053-.634.28-1.232.666-1.746a3.376 3.376 0 012.721-1.36c.16 0 .322.011.481.034a.75.75 0 01-.211 1.485 1.886 1.886 0 00-.538 0 1.892 1.892 0 00-1.609 1.582 3.74 3.74 0 012.998 3.501c4.236 1.045 6.754 3.618 6.754 6.925a4.226 4.226 0 01-2.586 3.921l-1.055 4.77A2.298 2.298 0 0116.577 24h-9.2zm9.2-1.5a.806.806 0 00.791-.635l.907-4.103h-.049c-.457 0-.909-.074-1.346-.22a4.26 4.26 0 01-.951-.453l-.833 5.41h1.481zm-2.998 0l.851-5.53a4.174 4.174 0 01-2.448.789 4.232 4.232 0 01-2.467-.787l.85 5.528h3.214zm-6.993-.635a.805.805 0 00.79.635h1.472l-.832-5.411a4.24 4.24 0 01-2.293.671H5.67l.916 4.105zm-1.631-5.714c.248.072.503.109.759.11a2.72 2.72 0 002.217-1.113l.022-.03c.084-.117.163-.247.228-.376a.752.752 0 011.343.003 2.721 2.721 0 002.453 1.517c.423 0 .831-.096 1.212-.286a2.744 2.744 0 001.231-1.232.745.745 0 01.671-.416c.287 0 .544.159.672.414a2.74 2.74 0 002.464 1.52c.428 0 .841-.098 1.226-.291a2.734 2.734 0 001.519-2.468c0-.963-.402-4.147-5.491-5.439a3.752 3.752 0 01-3.509 2.437 3.753 3.753 0 01-3.509-2.438c-5.088 1.291-5.49 4.475-5.49 5.437a2.745 2.745 0 001.912 2.63c.024.007.047.013.07.021zM11.973 4.5c-1.241 0-2.25 1.009-2.25 2.25S10.732 9 11.973 9s2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}})])
          )
        }
      }
    