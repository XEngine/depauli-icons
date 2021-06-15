
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M15 17.25a.75.75 0 01-.75-.75v-3A2.252 2.252 0 0012 11.25H9.311l.97.97a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-2.25-2.25a.74.74 0 01-.163-.245l-.01-.026a.738.738 0 01.174-.791L9.22 7.72c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.97.97H12a3.754 3.754 0 013.75 3.75v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    