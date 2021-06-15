
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
            children.concat([_c('path',{attrs:{"d":"M1.502 19.478a1.49 1.49 0 01-1.173-.562 1.51 1.51 0 01-.329-.94v-5.219C0 12.07.308 11.43.844 11l10.218-8.175c.267-.213.6-.33.938-.33s.67.117.937.33L23.156 11c.537.43.844 1.07.844 1.757v5.219c0 .4-.155.777-.438 1.06-.283.284-.66.44-1.061.44-.341 0-.674-.117-.939-.329L12 11.498l-9.562 7.65a1.48 1.48 0 01-.936.33zM12 9.788c.17 0 .336.058.469.164L22.5 17.977v-5.22a.745.745 0 00-.282-.585L12 3.997v-.375.375L1.781 12.172a.75.75 0 00-.281.586v5.219l10.031-8.025A.754.754 0 0112 9.788z"}})])
          )
        }
      }
    