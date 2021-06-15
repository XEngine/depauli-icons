
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
            children.concat([_c('path',{attrs:{"d":"M14.25 18a.75.75 0 01-.75-.75V15h-3v2.25a.75.75 0 01-1.5 0V11.8a2.914 2.914 0 013-2.801l.089-.001a2.905 2.905 0 012.909 2.766L15 17.25a.75.75 0 01-.75.75zm-.75-4.5v-1.7c-.035-.722-.654-1.302-1.409-1.302L12 10.5l-.091-.002c-.755 0-1.375.588-1.41 1.338V13.5H13.5z"}}),_c('path',{attrs:{"d":"M2.25 21.75A2.252 2.252 0 010 19.5v-12a2.252 2.252 0 012.25-2.25h3.82l1.257-1.963A2.238 2.238 0 019.221 2.25h5.558c.772 0 1.48.388 1.896 1.037l1.256 1.963h3.819A2.252 2.252 0 0124 7.5v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-4.23a.747.747 0 01-.632-.346l-1.477-2.309a.745.745 0 00-.631-.345H9.221a.744.744 0 00-.631.346L7.112 6.404a.747.747 0 01-.632.346H2.25z"}})])
          )
        }
      }
    