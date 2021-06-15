
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
            children.concat([_c('path',{attrs:{"d":"M2.944 21a2.181 2.181 0 01-1.794-.951 2.302 2.302 0 01-.294-2.006c1.62-4.381 5.763-7.366 10.389-7.538v-1.6A3.017 3.017 0 018.994 6c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5a.75.75 0 01.75.75v2.253c4.624.162 8.765 3.141 10.381 7.509a2.337 2.337 0 01-.286 2.039 2.18 2.18 0 01-1.79.948H2.944zm8.737-9.005c-4.181 0-7.962 2.627-9.409 6.538a.793.793 0 00.113.666c.129.188.338.3.562.301h18.098a.685.685 0 00.558-.297.807.807 0 00.105-.7c-1.438-3.886-5.208-6.507-9.376-6.507-.104 0-.21.002-.315.005l-.05-.001a7.127 7.127 0 00-.286-.005z"}})])
          )
        }
      }
    