
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
            children.concat([_c('path',{attrs:{"d":"M7.993 21.25a2.241 2.241 0 01-1.741-.825L.341 13.2a1.5 1.5 0 01.001-1.901l5.91-7.224a2.243 2.243 0 011.741-.825h13.539a2.252 2.252 0 012.25 2.25V19a2.252 2.252 0 01-2.25 2.25H7.993zm0-16.5c-.226 0-.438.1-.581.275l-5.91 7.225 5.911 7.225a.745.745 0 00.58.275h13.539a.75.75 0 00.75-.75V5.5a.75.75 0 00-.75-.75H7.993z"}}),_c('path',{attrs:{"d":"M18.532 16.75a.743.743 0 01-.53-.22l-3.22-3.22-3.22 3.22a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3.22-3.22-3.22-3.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.22 3.22 3.22-3.22a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.22 3.22 3.22 3.22a.752.752 0 01-.53 1.281z"}})])
          )
        }
      }
    