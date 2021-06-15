
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
            children.concat([_c('path',{attrs:{"d":"M9.106 21.211c-.467 0-.907-.182-1.237-.513L.41 13.239a1.753 1.753 0 010-2.475l7.459-7.459c.33-.33.77-.512 1.237-.512.468 0 .907.182 1.237.512l7.459 7.459a1.753 1.753 0 010 2.475l-7.459 7.459c-.33.331-.77.513-1.237.513zm0-16.918a.249.249 0 00-.177.073L1.47 11.825a.252.252 0 000 .354l7.459 7.459a.249.249 0 00.177.067c.07 0 .134-.024.177-.067l7.46-7.459a.252.252 0 000-.354l-7.46-7.46a.248.248 0 00-.177-.072z"}}),_c('path',{attrs:{"d":"M18.856 20.251a.75.75 0 01-.75-.75v-3.75a.75.75 0 011.5 0v1.795l1.216-1.349c2.36-2.362 2.366-6.175.027-8.514l-1.243-1.306v1.874a.75.75 0 01-1.5 0v-3.75l.003-.045a.732.732 0 01.059-.252l.012-.026a.714.714 0 01.137-.198l.015-.016a.737.737 0 01.524-.213h3.75a.75.75 0 010 1.5h-2.001l1.318 1.385a7.433 7.433 0 012.184 5.29c0 2.003-.78 3.887-2.197 5.303l-1.37 1.522h2.067a.75.75 0 010 1.5h-3.751z"}})])
          )
        }
      }
    