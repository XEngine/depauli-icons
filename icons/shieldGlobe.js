
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
            children.concat([_c('path',{attrs:{"d":"M12 24.001a3.74 3.74 0 01-1.346-.25l-1.041-.4C4.76 21.484 1.5 16.737 1.5 11.538V3.924A2.239 2.239 0 012.806 1.88 22.305 22.305 0 0111.788 0l.219.001.186-.001c3.115 0 6.14.631 8.989 1.875A2.246 2.246 0 0122.5 3.929v7.609c0 5.199-3.26 9.946-8.113 11.813l-1.041.4a3.74 3.74 0 01-1.346.25zM11.8 1.5a20.84 20.84 0 00-8.382 1.749.732.732 0 00-.418.67v7.619c0 4.583 2.874 8.768 7.151 10.413l1.041.4a2.24 2.24 0 001.616.001l1.041-.4C18.126 20.305 21 16.121 21 11.538V3.924a.742.742 0 00-.43-.68A20.807 20.807 0 0012.194 1.5l-.187.001L11.8 1.5z"}}),_c('path',{attrs:{"d":"M12 18a6.758 6.758 0 01-6.75-6.75c0-3.711 3.019-6.739 6.73-6.75h.044c3.707.011 6.726 3.039 6.726 6.75A6.758 6.758 0 0112 18zm2.966-5.999c-.123 1.422-.597 2.852-1.414 4.264a5.27 5.27 0 003.643-4.264h-2.229zm-8.161 0a5.271 5.271 0 003.643 4.264c-.817-1.412-1.292-2.842-1.414-4.264H6.805zm3.724 0c.137 1.293.63 2.612 1.471 3.933.841-1.321 1.334-2.64 1.471-3.933h-2.942zm6.666-1.5a5.271 5.271 0 00-3.643-4.264c.817 1.412 1.292 2.842 1.414 4.264h2.229zm-3.724 0c-.137-1.294-.63-2.613-1.471-3.934-.841 1.321-1.335 2.641-1.471 3.934h2.942zm-4.437 0c.123-1.423.597-2.852 1.414-4.264a5.269 5.269 0 00-3.643 4.264h2.229z"}})])
          )
        }
      }
    