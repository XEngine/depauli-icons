
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h9.75v-9.439l-1.5-1.5V16.5a.75.75 0 01-1.5 0V15H5.25A2.252 2.252 0 013 12.75v-3A2.252 2.252 0 015.25 7.5H7.5V6A.75.75 0 019 6v3.439l1.5 1.5V3c0-1.654 1.346-3 3-3s3 1.346 3 3v1.939l1.72-1.72a.746.746 0 011.06.001c.142.141.22.33.22.53s-.078.389-.22.53L16.5 7.06V22.5h6.75a.75.75 0 010 1.5H.75zM15 22.5V3c0-.827-.673-1.5-1.5-1.5S12 2.173 12 3v19.5h3zM5.25 9a.75.75 0 00-.75.75v3c0 .414.336.75.75.75H7.5V9H5.25z"}})])
          )
        }
      }
    