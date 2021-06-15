
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
            children.concat([_c('path',{attrs:{"d":"M15.746 23.25c-.827 0-1.5-.673-1.5-1.5v-9h-4.5v9c0 .827-.673 1.5-1.5 1.5H6.825a1.49 1.49 0 01-1.062-.442 1.494 1.494 0 01-.431-1.207l.885-8.852H4.496a.75.75 0 010-1.5h1.871l.3-3H4.786a2.26 2.26 0 01-2.107-1.46L.794 1.764a.75.75 0 01.921-.981C5.06 1.807 8.517 2.326 11.989 2.326s6.929-.519 10.273-1.543a.768.768 0 01.843.29.752.752 0 01.093.691l-1.885 5.027a2.262 2.262 0 01-2.1 1.46h-1.889l.3 3h1.871a.75.75 0 010 1.5h-1.721l.885 8.85a1.5 1.5 0 01-1.492 1.65h-1.421zm0-1.5h1.421l-1.35-13.5h-.071v13.5zm-8.922 0h1.422V8.25h-.071l-1.351 13.5zm7.422-10.5v-3h-1.5v3h1.5zm-3 0v-3h-1.5v3h1.5zM4.083 6.264a.753.753 0 00.702.486h14.426a.753.753 0 00.698-.486l1.365-3.641a36.55 36.55 0 01-9.284 1.203c-3.121 0-6.235-.403-9.27-1.199l1.363 3.637z"}})])
          )
        }
      }
    