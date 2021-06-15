
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
            children.concat([_c('path',{attrs:{"d":"M3.494 23.987a4.688 4.688 0 01-3.152-1.211.752.752 0 01-.027-1.087l7.954-7.954a1.503 1.503 0 01-.001-2.123L18.877 1.006c.567-.567 1.32-.879 2.121-.879s1.555.312 2.121.879a3.003 3.003 0 010 4.243L12.51 15.856c-.284.282-.66.438-1.061.438s-.777-.155-1.059-.437l-1.06-1.061-1.657 1.657c1.243 1.891.95 4.478-.728 6.032a4.715 4.715 0 01-3.451 1.502zm-1.491-1.865a3.211 3.211 0 003.857-.673l.05-.05a3.2 3.2 0 00.671-3.855l-4.578 4.578zm9.447-7.327L22.059 4.188a1.501 1.501 0 00-2.122-2.121L9.328 12.674l.509.509.032.03.016.018 1.565 1.564z"}})])
          )
        }
      }
    