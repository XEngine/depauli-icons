
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
            children.concat([_c('path',{attrs:{"d":"M7.34 19.754c-.175 0-.441-.052-.711-.302L.461 13.334a1.502 1.502 0 01.018-2.182L6.61 5.073c.285-.266.555-.32.732-.32.153 0 .275.039.351.072.131.057.557.293.557.938v2.739h13.5a2.252 2.252 0 012.25 2.25v3a2.252 2.252 0 01-2.25 2.25H8.25v2.742c0 .645-.425.881-.556.938a.917.917 0 01-.354.072zm-5.822-7.52l-.017.021.009.007 5.241 5.199v-2.209a.75.75 0 01.75-.75h14.25a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H7.501a.75.75 0 01-.75-.75V7.045l-5.233 5.189z"}})])
          )
        }
      }
    