
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.997 17.578a1.497 1.497 0 01-1.148-.537l-5.9-7.082a1.481 1.481 0 01-.341-1.095c.036-.399.226-.76.534-1.016.268-.224.608-.348.957-.348h2.18c.687 0 1.327.308 1.757.844L12 10.8l1.965-2.455a2.236 2.236 0 011.756-.845H17.9c.402.001.778.157 1.061.441a1.502 1.502 0 01.091 2.018l-5.901 7.079a1.488 1.488 0 01-1.154.54zm.002-1.499L17.899 9h-2.178a.747.747 0 00-.585.281l-2.551 3.187a.743.743 0 01-.585.274.745.745 0 01-.586-.274l-2.55-3.187A.747.747 0 008.279 9H6.102l5.897 7.079z"}})])
          )
        }
      }
    