
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M6.75 18a.75.75 0 01-.75-.75V7.5a.75.75 0 011.5 0v4.525l1.808-1.318c.207-.138.427-.207.65-.207a1.117 1.117 0 01.938.503l.012.018 2.181 2.193 1.24-2.471a1.119 1.119 0 01.725-.563l2.134-.416a.752.752 0 01.88.593.75.75 0 01-.593.879l-1.9.37-1.405 2.798a1.119 1.119 0 01-.55.504 1.126 1.126 0 01-1.391-.431l-2.331-2.344L7.5 13.881V16.5h9.75a.75.75 0 010 1.5H6.75z"}})])
          )
        }
      }
    