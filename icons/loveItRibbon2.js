
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
            children.concat([_c('path',{attrs:{"d":"M18 24.003a.749.749 0 01-.635-.35l-3.54-5.618-.884.712a1.507 1.507 0 01-1.883.001l-.885-.714-3.54 5.618a.746.746 0 01-.721.345.754.754 0 01-.624-.508l-1.362-4.087-3.323-.665c-.257-.052-.471-.236-.559-.482s-.04-.525.125-.728l3.44-4.204-.074-.049a1.509 1.509 0 01-.58-1.791l.743-1.943-.743-1.95a1.503 1.503 0 01.582-1.795l1.746-1.143.546-2.014A1.499 1.499 0 017.272 1.53l.08.002 2.083.107L11.059.334a1.507 1.507 0 011.882 0l1.625 1.306 2.084-.104a1.505 1.505 0 011.522 1.106l.546 2.014L20.465 5.8c.59.384.834 1.141.579 1.799l-.74 1.942.742 1.949a1.505 1.505 0 01-.581 1.79l-.072.047 3.438 4.202a.752.752 0 01-.434 1.21l-3.323.665-1.362 4.087a.75.75 0 01-.712.512zm-.21-2.491l.999-2.997a.75.75 0 01.564-.498l2.526-.505-2.75-3.36-.412.27-.545 2.015a1.502 1.502 0 01-1.446 1.108l-.078-.002-1.404-.07 2.546 4.039zM4.647 18.018a.75.75 0 01.564.498l.999 2.996 2.547-4.042-1.407.07a1.502 1.502 0 01-1.522-1.106l-.546-2.015-.41-.269-2.751 3.362 2.526.506zm5.035-2.095c.171 0 .338.059.471.166L12 17.581l1.498-1.207a.747.747 0 01.09-.072l.259-.209a.748.748 0 01.472-.166h.032l2.372.118.619-2.29a.757.757 0 01.313-.432l1.986-1.3-.844-2.217a.748.748 0 010-.535l.844-2.212-1.986-1.305a.743.743 0 01-.313-.431l-.62-2.29-2.409.119a.749.749 0 01-.467-.166l-1.847-1.484-1.849 1.484a.752.752 0 01-.47.165l-.039-.001-2.367-.12-.618 2.289a.743.743 0 01-.313.431l-1.986 1.3.844 2.223a.75.75 0 010 .534l-.844 2.213 1.986 1.3a.744.744 0 01.313.432l.62 2.29 2.369-.118.037-.001z"}}),_c('path',{attrs:{"d":"M12 15.003a.753.753 0 01-.541-.231l-3.835-4a3.006 3.006 0 01-.554-3.475 3.004 3.004 0 012.704-1.668 3.027 3.027 0 012.131.884l.095.095.096-.096c.569-.569 1.327-.883 2.135-.883a3 3 0 012.7 1.668 3.014 3.014 0 01-.565 3.485l-3.824 3.99a.757.757 0 01-.542.231zM9.773 7.129c-.581 0-1.103.322-1.362.84a1.514 1.514 0 00.284 1.753L12 13.169l3.293-3.436a1.524 1.524 0 00.011-2.16c-.286-.286-.667-.444-1.074-.444s-.788.158-1.074.444l-.626.626a.744.744 0 01-1.06 0l-.626-.626a1.503 1.503 0 00-1.071-.444z"}})])
          )
        }
      }
    