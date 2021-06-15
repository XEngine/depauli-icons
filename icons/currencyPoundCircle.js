
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}}),_c('path',{attrs:{"d":"M9 17.25a.75.75 0 010-1.5.75.75 0 00.75-.75v-2.25H9a.75.75 0 010-1.5h.75v-3c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v3h2.25a.75.75 0 010 1.5h-2.25V15c0 .259-.043.512-.128.75H15a.75.75 0 010 1.5H9z"}})])
          )
        }
      }
    