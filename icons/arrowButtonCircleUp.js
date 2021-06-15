
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M7.182 16.5c-.555 0-1.062-.277-1.323-.723a1.275 1.275 0 01-.013-1.281l4.823-8.504a1.567 1.567 0 011.329-.739 1.559 1.559 0 011.335.741l4.817 8.499c.229.403.226.882-.007 1.282-.261.447-.768.725-1.324.725H7.182zm9.531-1.5L12.05 6.774a.073.073 0 00-.037-.019l-.014-.001a.066.066 0 00-.04.013L7.284 15h9.429z"}})])
          )
        }
      }
    