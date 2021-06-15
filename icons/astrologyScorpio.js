
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
            children.concat([_c('path',{attrs:{"d":"M18.871 22.565a3.2 3.2 0 01-3.196-3.195V6.163A3.167 3.167 0 0012.512 3 3.166 3.166 0 009.35 6.163v12.228a.75.75 0 01-1.5 0V6.163A3.167 3.167 0 004.687 3a3.168 3.168 0 00-3.164 3.163v12.228a.75.75 0 01-1.5 0V6.163A4.669 4.669 0 014.686 1.5 4.67 4.67 0 018.6 3.635 4.667 4.667 0 0112.512 1.5a4.669 4.669 0 014.663 4.663V19.37a1.696 1.696 0 003.391 0v-.635l-.676.675a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.956-1.956a.74.74 0 01.245-.163l.026-.01a.733.733 0 01.517 0l.016.006a.748.748 0 01.256.167l1.957 1.956c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-.677-.676v.636a3.198 3.198 0 01-3.195 3.195z"}})])
          )
        }
      }
    