
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
            children.concat([_c('path',{attrs:{"d":"M9 19.401a1.504 1.504 0 01-1.501-1.5v-2.18c0-.688.307-1.328.845-1.758L10.799 12l-2.455-1.963a2.24 2.24 0 01-.845-1.757V6.1a1.503 1.503 0 011.5-1.498c.353.001.692.124.96.347l7.079 5.9c.307.255.497.616.534 1.015a1.488 1.488 0 01-.534 1.29l-7.079 5.9a1.5 1.5 0 01-.959.347zM8.998 6.102l.001 2.178c0 .229.103.442.281.585l3.188 2.549c.179.143.282.356.282.586s-.103.443-.282.586l-3.188 2.55a.743.743 0 00-.281.586v2.181l7.079-5.9-7.08-5.901z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    