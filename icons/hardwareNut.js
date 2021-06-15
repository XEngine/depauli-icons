
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
            children.concat([_c('path',{attrs:{"d":"M6.9 22.5a2.246 2.246 0 01-1.981-1.184l-4.442-8.25a2.247 2.247 0 010-2.133l4.442-8.25A2.246 2.246 0 016.9 1.5h10.2c.829 0 1.588.453 1.981 1.183l4.442 8.25c.36.668.36 1.465 0 2.133l-4.442 8.25A2.245 2.245 0 0117.1 22.5H6.9zM6.9 3a.749.749 0 00-.66.394l-4.442 8.25a.747.747 0 000 .711l4.442 8.25A.748.748 0 006.9 21h10.2a.748.748 0 00.66-.395l4.443-8.25a.747.747 0 000-.711l-4.442-8.25a.749.749 0 00-.66-.394H6.9z"}}),_c('path',{attrs:{"d":"M12 18c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.691 6-6 6zm0-10.5A4.505 4.505 0 007.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    