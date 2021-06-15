
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
            children.concat([_c('path',{attrs:{"d":"M18.693 21c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S20.761 21 18.693 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S19.934 15 18.693 15zM5.193 21c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S7.261 21 5.193 21zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S6.433 15 5.193 15zM7.443 9.75a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.22-3.22-1.19-1.19a1.501 1.501 0 010-2.121L10.132.75c.283-.283.66-.439 1.061-.439s.777.156 1.061.439l3.439 3.439c.283.283.439.66.439 1.061 0 .401-.156.777-.439 1.061L14.503 7.5c-.283.283-.66.439-1.061.439s-.777-.156-1.06-.439l-1.189-1.19-3.22 3.22a.744.744 0 01-.53.22zM10.003 3l3.439 3.439 1.189-1.189-3.438-3.44L10.003 3z"}}),_c('path',{attrs:{"d":"M11.193 15.75a.747.747 0 01-.75-.75v-3h-5.25a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 015.193 0h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h6a.75.75 0 01.75.75v1.939l2.47-2.47c.14-.14.333-.22.53-.22h3a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-2.25a.75.75 0 010-1.499h2.25a2.252 2.252 0 012.25 2.25v7.5a2.252 2.252 0 01-2.25 2.25h-2.689l-3.53 3.53a.747.747 0 01-.531.22zM9.5 24a.75.75 0 01-.616-.322 4.472 4.472 0 00-2.898-1.858 4.453 4.453 0 00-3.363.736A4.485 4.485 0 001.5 23.678a.749.749 0 11-1.231-.856 5.966 5.966 0 011.497-1.497 5.952 5.952 0 014.485-.98 5.96 5.96 0 013.865 2.478.752.752 0 01-.187 1.044A.755.755 0 019.5 24zM23 24a.75.75 0 01-.615-.321 4.469 4.469 0 00-2.899-1.859 4.457 4.457 0 00-3.364.736A4.464 4.464 0 0015 23.678a.753.753 0 01-1.044.188.752.752 0 01-.188-1.044 6.011 6.011 0 011.496-1.497 5.956 5.956 0 014.486-.981 5.955 5.955 0 013.865 2.477A.751.751 0 0123 24z"}})])
          )
        }
      }
    