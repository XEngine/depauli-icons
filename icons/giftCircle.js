
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm.75-1.53c5.184-.368 9.352-4.536 9.72-9.72h-2.22a.75.75 0 010-1.5h2.22c-.368-5.184-4.536-9.352-9.72-9.72v7.91l1.977-1.977c.502-.502 1.169-.779 1.879-.779s1.378.276 1.88.778a2.64 2.64 0 01.779 1.879c0 .71-.276 1.377-.778 1.88a2.642 2.642 0 01-1.881.779H13.81l2.47 2.47a.744.744 0 010 1.06.749.749 0 01-1.06 0l-2.47-2.47v9.41zM1.53 12.75c.369 5.184 4.536 9.352 9.72 9.72v-9.41l-2.47 2.47a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L10.19 12H7.394c-.71 0-1.378-.276-1.88-.779a2.641 2.641 0 01-.778-1.88c0-.71.277-1.378.779-1.88a2.64 2.64 0 011.879-.777 2.64 2.64 0 011.88.778l1.977 1.977V1.53c-5.184.369-9.352 4.536-9.72 9.72h2.22a.75.75 0 010 1.5H1.53zm15.076-2.25a1.155 1.155 0 00.819-1.977 1.149 1.149 0 00-.819-.339c-.309 0-.6.12-.819.339L13.811 10.5h2.795zM7.394 8.185c-.31 0-.601.12-.819.338a1.15 1.15 0 00-.339.819c0 .309.12.6.339.819.218.219.509.339.819.339h2.796L8.213 8.523a1.152 1.152 0 00-.819-.338z"}})])
          )
        }
      }
    