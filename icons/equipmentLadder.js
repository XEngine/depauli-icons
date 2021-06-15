
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.748.748 0 01-.727-.568L21.54 19.5h-7.29a.75.75 0 010-1.5h6.915l-.75-3H15a.75.75 0 010-1.5h5.04l-.75-3H16.5a.75.75 0 010-1.5h2.415l-.75-3h-3.329l-4.358 17.432a.749.749 0 11-1.455-.364l.891-3.568H2.461l-.983 3.932a.749.749 0 11-1.455-.364L4.338 5.805A2.249 2.249 0 013 3.75v-1.5A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25v1.5c0 .9-.535 1.699-1.338 2.055l4.316 17.263a.747.747 0 01-.728.932zm-12.961-6l.75-3H3.586l-.75 3h7.453zm1.125-4.5l.75-3H4.711l-.75 3h7.453zM12.54 9l.75-3H5.836l-.75 3h7.454zM5.25 1.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M14.25 24a.748.748 0 01-.727-.568l-.75-3a.752.752 0 01.727-.932c.345 0 .645.233.728.568l.75 3a.752.752 0 01-.728.932z"}})])
          )
        }
      }
    