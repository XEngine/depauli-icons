
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
            children.concat([_c('path',{attrs:{"d":"M16.5 24c-.863 0-1.685-.38-2.25-1.019A3.017 3.017 0 0112 24c-.863 0-1.685-.38-2.25-1.019A3.017 3.017 0 017.5 24c-1.654 0-3-1.346-3-3v-3.75c0-.057.007-.115.022-.176l.013-.045a.78.78 0 01.062-.147 5.339 5.339 0 00.002-5.261.775.775 0 01-.099-.371v-1.5c0-3.555 2.653-6.242 5.25-6.684V.75A.75.75 0 0110.5 0h3a.75.75 0 01.75.75v2.316c2.597.442 5.25 3.128 5.25 6.684v1.5a.731.731 0 01-.022.176l-.014.049a.628.628 0 01-.042.104.403.403 0 01-.026.051 5.327 5.327 0 00.005 5.248.807.807 0 01.063.149l.014.046a.725.725 0 01.022.176V21c0 1.654-1.346 3-3 3zm-2.25-3.75A.75.75 0 0115 21c0 .827.673 1.5 1.5 1.5S18 21.827 18 21v-3H6v3c0 .827.673 1.5 1.5 1.5S9 21.827 9 21a.75.75 0 011.5 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5a.75.75 0 01.75-.75zm3.342-3.75a6.834 6.834 0 010-4.5H6.408a6.847 6.847 0 010 4.5h11.184zm.408-6v-.75c0-2.957-2.419-5.25-4.5-5.25h-3C8.419 4.5 6 6.793 6 9.75v.75h12zM12.75 3V1.5h-1.5V3h1.5z"}})])
          )
        }
      }
    