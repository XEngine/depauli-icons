
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
            children.concat([_c('path',{attrs:{"d":"M19.5 15.512c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM21.067 23.052a2.223 2.223 0 01-1.217-.359l-4.693-2.68H9c-.486 0-.965-.16-1.351-.451l-5.783-4.338c-.321-.24-.528-.591-.585-.988s.045-.792.285-1.112c.281-.375.73-.6 1.2-.6l2.5.002c.321 0 .641.106.898.298l3.586 2.689h6c.392.001.778.105 1.117.3l5.249 2.999c.511.257.906.717 1.092 1.288.187.571.141 1.18-.128 1.714a2.243 2.243 0 01-2.013 1.238zM8.55 18.362a.75.75 0 00.448.15h6.358a.76.76 0 01.372.098l4.901 2.8c.053.033.078.048.104.061a.736.736 0 00.573.043.75.75 0 00.101-1.382l-5.285-3.019a.753.753 0 00-.375-.101H9.5a.753.753 0 01-.45-.15L7.474 15.68l-1.323.882 2.399 1.8zm-3.671-2.754l1.323-.882-.936-.702-2.499-.001 2.112 1.585z"}}),_c('path',{attrs:{"d":"M9.75 14.012a2.252 2.252 0 01-2.25-2.25 2.252 2.252 0 012.25-2.25h3.75c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H9.75zm0-3a.75.75 0 000 1.5h3.75v-1.5H9.75zM23.249 4.662A5.431 5.431 0 0119.5 3.145a5.431 5.431 0 01-3.749 1.517A5.434 5.434 0 0112 3.145a5.431 5.431 0 01-3.749 1.517A5.434 5.434 0 014.5 3.145 5.431 5.431 0 01.751 4.662a.751.751 0 01-.532-1.279.748.748 0 01.53-.221 3.93 3.93 0 003.147-1.595c.137-.185.363-.296.604-.296s.467.111.604.297a3.934 3.934 0 003.148 1.595 3.933 3.933 0 003.145-1.595c.136-.186.362-.297.603-.297s.467.111.604.297a3.932 3.932 0 003.147 1.595 3.933 3.933 0 003.145-1.595c.137-.186.363-.297.604-.297s.467.111.604.296a3.931 3.931 0 003.148 1.595.745.745 0 01.748.752.751.751 0 01-.751.748z"}})])
          )
        }
      }
    