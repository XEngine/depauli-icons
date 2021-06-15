
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
            children.concat([_c('path',{attrs:{"d":"M16.319 9.75a.751.751 0 01-.744-.656l-.486-3.844H8.911l-.486 3.844a.75.75 0 01-1.488-.188L7.5 4.453V2.5c0-.965.785-1.75 1.75-1.75h5.5c.965 0 1.75.785 1.75 1.75v1.953l.563 4.453a.751.751 0 01-.744.844zM15 3.75V2.5a.25.25 0 00-.25-.25h-5.5A.25.25 0 009 2.5v1.25h6zM19.5 23.25a.75.75 0 01-.75-.75V21h-6v1.5a.75.75 0 01-1.5 0V21h-6v1.5a.75.75 0 01-1.5 0V21h-1.5a.75.75 0 010-1.5h1.5v-1.57a2.275 2.275 0 01-1.676-1.862l-.566-3.962a.749.749 0 01.743-.856h4.5a.749.749 0 01.743.856l-.565 3.962a2.278 2.278 0 01-1.677 1.863v1.57h6v-1.57a2.275 2.275 0 01-1.676-1.862l-.566-3.962a.749.749 0 01.743-.856h4.5a.747.747 0 01.743.855l-.565 3.963a2.278 2.278 0 01-1.678 1.863v1.57h6v-1.57a2.278 2.278 0 01-1.677-1.862l-.566-3.962a.748.748 0 01.742-.856h4.5a.747.747 0 01.743.855l-.565 3.963a2.278 2.278 0 01-1.678 1.863v1.57h1.5A.75.75 0 1121.75 21h-1.5v1.5a.75.75 0 01-.75.75zm-.941-7.394a.753.753 0 00.742.644h.399c.371 0 .69-.277.742-.644l.443-3.106h-2.771l.445 3.106zm-7.5 0a.753.753 0 00.741.644h.4c.371 0 .69-.277.742-.644l.443-3.106h-2.771l.445 3.106zm-7.5 0a.753.753 0 00.741.644h.4c.371 0 .69-.277.743-.644l.443-3.106H3.115l.444 3.106z"}})])
          )
        }
      }
    