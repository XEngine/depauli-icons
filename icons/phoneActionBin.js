
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
            children.concat([_c('path',{attrs:{"d":"M5.358 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 015.358 1.5h3.267a.75.75 0 010 1.5H5.358c-1.093 0-1.983.89-1.983 1.983V18h10.5v-4.5a.75.75 0 011.5 0v7.018A3.486 3.486 0 0111.893 24H5.358zm-1.983-3.482c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5h-10.5v1.018z"}}),_c('path',{attrs:{"d":"M14.514 11.25a2.26 2.26 0 01-2.242-2.078L11.68 1.5h-.805a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.806l-.59 7.672a2.26 2.26 0 01-2.243 2.078h-3.222zm3.222-1.5c.39 0 .718-.304.748-.693L18.719 6h-1.844v3.75h.861zm-3.969-.693c.03.388.358.693.748.693h.861V6h-1.844l.235 3.057zM18.834 4.5l.23-3h-2.19v3h1.96zm-3.459 0v-3h-2.19l.231 3h1.959z"}})])
          )
        }
      }
    