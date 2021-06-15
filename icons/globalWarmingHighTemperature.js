
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
            children.concat([_c('path',{attrs:{"d":"M13.293 12.671a.748.748 0 01-.727-.568l-.544-2.176a.752.752 0 01.58-.917l2.544-.51a.752.752 0 00.603-.735V6.048a.75.75 0 00-.334-.624l-1.579-1.068a.747.747 0 01.42-1.372.75.75 0 01.42.129l1.575 1.065c.624.416.998 1.115.998 1.869v1.717c0 1.069-.76 1.997-1.809 2.206l-1.773.355.353 1.413a.747.747 0 01-.727.933z"}}),_c('path',{attrs:{"d":"M15.748 16.485a8.3 8.3 0 01-4.95-1.64.75.75 0 11.899-1.2 6.684 6.684 0 004.043 1.339 6.8 6.8 0 003.008-.7l-.48-2.34a2.255 2.255 0 011.5-2.58l2.72-.906a6.737 6.737 0 00-1.342-4.263 6.706 6.706 0 00-4.445-2.632 6.864 6.864 0 00-.969-.069 6.682 6.682 0 00-4.036 1.351.753.753 0 01-1.192-.706.742.742 0 01.293-.494A8.167 8.167 0 0115.73-.006c.393 0 .791.028 1.184.084a8.195 8.195 0 015.433 3.217 8.22 8.22 0 011.599 5.854l-.002.016a8.2 8.2 0 01-3.247 5.681 7.977 7.977 0 01-.665.444.791.791 0 01-.132.076 8.265 8.265 0 01-4.152 1.119zm4.494-5.697a.75.75 0 00-.501.859l.361 1.757a6.727 6.727 0 002.126-3.278l-1.986.662zM5.259 23.992a5.25 5.25 0 01-3.898-1.732 5.21 5.21 0 01-1.34-3.782A5.22 5.22 0 011.5 15.094V3.745c0-2.068 1.682-3.75 3.75-3.75S9 1.677 9 3.745v11.347a5.247 5.247 0 011.5 3.652 5.236 5.236 0 01-5.241 5.248zm-.01-22.497a2.252 2.252 0 00-2.25 2.25v11.668c0 .212-.09.416-.248.557-.743.669-1.181 1.587-1.233 2.586s.288 1.957.957 2.7a3.75 3.75 0 005.286.276 3.748 3.748 0 001.238-2.787 3.723 3.723 0 00-1.248-2.772.753.753 0 01-.252-.561V3.745a2.252 2.252 0 00-2.25-2.25z"}}),_c('path',{attrs:{"d":"M5.249 20.995a2.252 2.252 0 01-2.25-2.25c0-.96.615-1.808 1.5-2.121V5.245a.75.75 0 011.5 0v11.379a2.258 2.258 0 011.5 2.121 2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    