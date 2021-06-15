
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v11.507a3.672 3.672 0 01-.06.655 3.712 3.712 0 01-1.039 1.997l-4.992 4.992a3.722 3.722 0 01-2.083 1.052 3.672 3.672 0 01-.569.047H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25H15v-3.75A3.754 3.754 0 0118.75 15h3.75V3.75a2.252 2.252 0 00-2.25-2.25H3.75zm15 15a2.252 2.252 0 00-2.25 2.25v3.375c.125-.082.241-.177.349-.285l4.992-4.992c.107-.107.202-.224.285-.349H18.75z"}})])
          )
        }
      }
    