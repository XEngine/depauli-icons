
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
            children.concat([_c('path',{attrs:{"d":"M14.251 10.498a.735.735 0 01-.261-.048l-.032-.012a.75.75 0 01-.4-.404l-.01-.026a.733.733 0 01-.047-.259v-6.75a.75.75 0 011.5 0v4.939l7.72-7.72a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-7.72 7.72H21a.75.75 0 010 1.5h-6.749zM.751 23.998a.752.752 0 01-.53-1.281l7.72-7.72h-4.94a.75.75 0 010-1.5h6.75c.088 0 .175.016.26.047l.022.008a.756.756 0 01.469.695v6.75a.75.75 0 01-1.5 0v-4.939l-7.72 7.72a.748.748 0 01-.531.22z"}})])
          )
        }
      }
    