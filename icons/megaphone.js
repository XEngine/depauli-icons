
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
            children.concat([_c('path',{attrs:{"d":"M9 21.25a.744.744 0 01-.517-.207A8.075 8.075 0 016.036 16H4.5A4.505 4.505 0 010 11.5C0 9.019 2.019 7 4.5 7h2.25c4.267 0 8.399-1.251 11.95-3.618l1.134-.756a.753.753 0 01.77-.037c.244.13.396.384.396.661v16.5a.748.748 0 01-1.166.624l-1.134-.756a21.501 21.501 0 00-11.153-3.6 6.565 6.565 0 001.97 3.938A.75.75 0 019 21.25zm-1.5-6.738a22.993 22.993 0 0112 3.836V4.651a23 23 0 01-12 3.837v6.024zM4.5 8.5c-1.654 0-3 1.346-3 3s1.346 3 3 3H6v-6H4.5zM23.25 13.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    