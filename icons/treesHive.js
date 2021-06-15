
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
            children.concat([_c('path',{attrs:{"d":"M1.825 21a1.299 1.299 0 01-.918-2.217 6.255 6.255 0 001.844-4.452V3.75a2.252 2.252 0 012.25-2.25h1.261c.901 0 1.713.535 2.068 1.364l1.171 2.732 1.171-2.732A2.246 2.246 0 0112.74 1.5h5.761a2.252 2.252 0 012.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75H12.74a.75.75 0 00-.69.454l-1.86 4.341a.75.75 0 01-1.379 0l-1.86-4.341A.747.747 0 006.262 3H5.001a.75.75 0 00-.75.75v10.581A7.74 7.74 0 012.292 19.5H21.21a7.741 7.741 0 01-1.959-5.169V12.75a.75.75 0 011.5 0v1.581c0 1.682.655 3.263 1.844 4.453.242.242.381.577.381.921A1.293 1.293 0 0121.678 21H1.825z"}}),_c('path',{attrs:{"d":"M17.001 10.5a.75.75 0 010-1.5h2.689l2.78-2.78a.747.747 0 011.061 0c.142.141.22.33.22.53s-.078.389-.22.53L21.812 9h1.189a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    