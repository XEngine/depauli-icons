
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
            children.concat([_c('path',{attrs:{"d":"M8.825 15.414a.747.747 0 01-.743-.854l.514-3.662-2.216.744a2.672 2.672 0 01-2.851-.754L.456 7.448a1.678 1.678 0 01-.348-.597 1.702 1.702 0 01.09-1.309 1.7 1.7 0 01.99-.862l2.272-.764a.745.745 0 01.768.18l1.199 1.195 2.068-.695L6.404 3.51a1.706 1.706 0 01-.327-1.981c.204-.41.556-.716.99-.862l1.72-.578a1.711 1.711 0 011.521.214l3.266 2.249 2.846-.957a3.161 3.161 0 014.006 1.988c.27.801.211 1.658-.164 2.415a3.139 3.139 0 01-1.824 1.591l-2.868.966-.3.763a.745.745 0 01-.972.424.748.748 0 01-.425-.972l.427-1.089a.747.747 0 01.459-.437l3.2-1.076c.421-.142.761-.439.959-.837s.228-.849.086-1.27a1.663 1.663 0 00-2.107-1.045L5.466 6.86a.748.748 0 01-.768-.18l-1.2-1.195-1.833.616a.212.212 0 00-.124.109.206.206 0 00-.011.163c.01.028.024.053.043.075l3.073 3.44a1.181 1.181 0 001.255.331L9.268 9.09a.744.744 0 01.718.134c.201.167.3.421.263.681l-.682 4.864a.751.751 0 01-.742.645zM9.334 1.5a.219.219 0 00-.067.011l-1.722.578a.21.21 0 00-.125.109.206.206 0 00-.011.163.224.224 0 00.052.085l1.624 1.615 2.712-.911-2.34-1.612a.218.218 0 00-.123-.038z"}}),_c('path',{attrs:{"d":"M17.241 23.999c-3.716 0-6.739-3.023-6.739-6.739s3.023-6.739 6.739-6.739 6.739 3.023 6.739 6.739-3.023 6.739-6.739 6.739zm0-11.978a5.245 5.245 0 00-5.239 5.239c0 2.889 2.35 5.239 5.239 5.239s5.239-2.35 5.239-5.239a5.245 5.245 0 00-5.239-5.239z"}}),_c('path',{attrs:{"d":"M17.241 18.01a.75.75 0 01-.75-.75v-2.647a.75.75 0 011.5 0v1.897h1.897a.75.75 0 010 1.5h-2.647z"}})])
          )
        }
      }
    