
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.751.751 0 01-.636-1.148l5.136-8.218V12.75H6.3c-.993 0-1.8-.807-1.8-1.8v-6.9c0-.993.807-1.8 1.8-1.8h2.072L9.22.433A.754.754 0 019.9 0h4.2c.29 0 .557.17.68.433l.848 1.817H17.7c.992 0 1.8.807 1.8 1.8v6.9c0 .993-.808 1.8-1.8 1.8h-4.95v1.885l5.136 8.218a.75.75 0 01-1.272.795l-3.864-6.183v5.785a.75.75 0 01-1.5 0v-5.785l-3.864 6.182A.746.746 0 016.75 24zM6.3 3.75a.3.3 0 00-.3.3v6.9a.3.3 0 00.3.3h11.4a.3.3 0 00.3-.3v-6.9a.3.3 0 00-.3-.3h-2.55a.754.754 0 01-.68-.433L13.623 1.5h-3.245L9.53 3.317a.754.754 0 01-.68.433H6.3z"}}),_c('path',{attrs:{"d":"M12 10.125c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    