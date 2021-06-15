
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h4.5v-1.565l-.114-.021a4.397 4.397 0 01-3.459-3.459l-1.335-6.676a5.216 5.216 0 01.78-3.942 5.219 5.219 0 014.128-2.331v-.135a2.26 2.26 0 01-1.5-2.121C9.75 1.009 10.76 0 12 0a2.252 2.252 0 012.25 2.25.75.75 0 01-1.5 0A.75.75 0 1012 3a.75.75 0 01.75.75v.755a5.214 5.214 0 013.473 1.533 5.219 5.219 0 011.537 3.713c0 .344-.034.69-.102 1.028l-1.335 6.676a4.378 4.378 0 01-1.877 2.804 4.41 4.41 0 01-1.696.677V22.5h4.5a.75.75 0 010 1.5H6.75zm5.268-4.5a2.896 2.896 0 001.596-.49 2.894 2.894 0 001.239-1.85l.132-.661H11.25a.75.75 0 010-1.499h4.035l.903-4.515a3.726 3.726 0 00-1.025-3.386A3.725 3.725 0 0012.511 6h-1.022c-.245 0-.493.024-.734.073A3.754 3.754 0 007.815 9h3.435a.75.75 0 010 1.5H7.816l1.332 6.661a2.902 2.902 0 002.84 2.339h.03zM20.389 8.25a.747.747 0 01-.742-.644.746.746 0 01.142-.556c.81-1.081.42-1.672-.226-2.651-.656-.994-1.472-2.23-.595-3.984a.747.747 0 011.006-.336.75.75 0 01.336 1.006c-.49.98-.073 1.612.505 2.487.683 1.034 1.618 2.451.174 4.377a.751.751 0 01-.6.301zM3.611 8.25a.752.752 0 01-.6-.3c-1.444-1.926-.509-3.343.174-4.377.578-.876.995-1.508.505-2.488a.75.75 0 011.342-.67c.877 1.754.061 2.99-.595 3.984-.646.979-1.036 1.57-.226 2.651.12.16.171.358.142.556a.745.745 0 01-.742.644z"}})])
          )
        }
      }
    