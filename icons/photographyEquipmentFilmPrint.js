
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
            children.concat([_c('path',{attrs:{"d":"M23.25 23.992a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.492a.75.75 0 01-.75.75zM7.663 10.512A1.707 1.707 0 016 8.765V.758a.75.75 0 011.5 0v8.028c-.003.128.082.223.194.226h8.633c.09-.003.177-.099.174-.205V.758a.75.75 0 011.499 0v8.028c.012.439-.153.867-.466 1.196s-.734.517-1.187.53H7.663zM17.25 24a.75.75 0 01-.75-.75v-8.014c.003-.127-.082-.221-.193-.225H7.673c-.09.003-.176.098-.173.204v8.034a.75.75 0 11-1.5.001v-8.014a1.67 1.67 0 01.466-1.196 1.688 1.688 0 011.186-.528h8.674a1.704 1.704 0 011.673 1.745v7.994a.749.749 0 01-.749.749zM.75 23.992a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.492a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"3.75","cy":"3.01","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"9.009","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"15.009","r":"1.125"}}),_c('circle',{attrs:{"cx":"3.75","cy":"21.009","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"3.01","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"9.009","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"15.009","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.25","cy":"21.009","r":"1.125"}})])
          )
        }
      }
    