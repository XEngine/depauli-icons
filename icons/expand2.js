
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
            children.concat([_c('path',{attrs:{"d":"M16.5 23.998a.75.75 0 010-1.5h4.939L12 13.059l-9.439 9.439H7.5a.75.75 0 010 1.5H.75a.755.755 0 01-.26-.047l-.022-.008A.756.756 0 010 23.248v-6.75a.75.75 0 011.5 0v4.939l9.439-9.439L1.5 2.559v4.939a.75.75 0 01-1.5 0V.748A.74.74 0 01.048.487L.055.466a.76.76 0 01.41-.412L.49.045a.737.737 0 01.26-.047H7.5a.75.75 0 010 1.5H2.561L12 10.938l9.439-9.439H16.5a.75.75 0 010-1.5h6.75a.735.735 0 01.293.06.75.75 0 01.401.405l.01.026c.03.08.046.169.046.258v6.75a.75.75 0 01-1.5 0V2.559l-9.439 9.439 9.439 9.439v-4.939a.75.75 0 011.5 0v6.75a.767.767 0 01-.046.258l-.006.016a.76.76 0 01-.412.419l-.026.01a.733.733 0 01-.259.047H16.5z"}})])
          )
        }
      }
    