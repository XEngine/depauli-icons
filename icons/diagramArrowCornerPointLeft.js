
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24.001a2.252 2.252 0 01-2.25-2.25v-9.75a.75.75 0 00-.75-.75H8.25v2.739c0 .645-.426.881-.557.938a.892.892 0 01-.354.073c-.176 0-.442-.053-.712-.304L.461 8.583A1.485 1.485 0 010 7.557a1.49 1.49 0 01.399-1.076c.023-.026.049-.051.076-.077a.592.592 0 01.019-.017L6.61.322c.286-.266.556-.32.733-.32.153 0 .275.039.351.072.131.058.556.294.556.938v2.739h13.5A2.252 2.252 0 0124 6.001v15.75a2.252 2.252 0 01-2.25 2.25H19.5zm-3-14.25a2.252 2.252 0 012.25 2.25v9.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75V6.001a.75.75 0 00-.75-.75H7.5a.75.75 0 01-.75-.75V2.295L1.494 7.507l5.256 5.201v-2.207a.75.75 0 01.75-.75h9z"}})])
          )
        }
      }
    