
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
            children.concat([_c('path',{attrs:{"d":"M6.606 21.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.672-1.5-1.5-1.5zM11.106 21.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h6.25a2.754 2.754 0 012.75 2.75V21a.75.75 0 01-.75.75h-8.25zm7.5-1.5V18.5c0-.689-.561-1.25-1.25-1.25h-5.5v3h6.75z"}}),_c('path',{attrs:{"d":"M1.5 24c-.401 0-.777-.156-1.06-.439a1.487 1.487 0 01-.417-1.321l2.039-11.554c.071-.402.306-.762.646-.988l8.399-5.599V.75a.75.75 0 011.5 0v3.349l8.399 5.599c.339.226.574.586.645.987L23.69 22.24c.07.395-.019.792-.249 1.121a1.494 1.494 0 01-1.228.639H1.5zm2.039-13.054L1.5 22.5h20.713l-2.039-11.554-8.317-5.545-8.318 5.545z"}})])
          )
        }
      }
    