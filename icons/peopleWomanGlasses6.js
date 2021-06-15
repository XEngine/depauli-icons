
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
            children.concat([_c('path',{attrs:{"d":"M2.498 24.001a.75.75 0 01-.678-1.071 11.288 11.288 0 012.615-3.518 15.346 15.346 0 01-1.987-.704 2.264 2.264 0 01-1.152-2.946l1.375-3.208c.201-.47.303-.967.303-1.478V9.001c0-4.963 4.037-9 9-9s9 4.037 9 9v2.076c0 .51.102 1.007.303 1.477l1.375 3.21a2.26 2.26 0 01-1.143 2.94c-.645.28-1.312.517-1.993.707a11.092 11.092 0 012.612 3.519c.086.181.096.385.028.574a.746.746 0 01-.705.497.753.753 0 01-.678-.429 9.602 9.602 0 00-4.122-4.366l-1.729 4.324a.745.745 0 01-.975.418.74.74 0 01-.41-.401.742.742 0 01-.007-.574l1.754-4.386a9.736 9.736 0 00-3.324-.584 9.626 9.626 0 00-3.294.579l1.757 4.39a.75.75 0 01-1.392.558l-1.732-4.328a9.78 9.78 0 00-4.12 4.37.76.76 0 01-.681.429zm14.162-6.468c.448.205.884.44 1.3.701a13.908 13.908 0 002.942-.901.75.75 0 00.372-.977l-1.375-3.211a5.22 5.22 0 01-.425-2.069V9.001c0-4.135-3.365-7.5-7.5-7.5s-7.5 3.365-7.5 7.5v2.076c0 .715-.143 1.411-.425 2.068l-1.376 3.21a.753.753 0 00.38.981c.925.402 1.911.704 2.929.897a11.2 11.2 0 011.187-.654c.033-.016.138-.061.138-.061a.753.753 0 01.103-.05l.047-.016a11.22 11.22 0 018.996-.012.618.618 0 01.207.093z"}}),_c('path',{attrs:{"d":"M11.981 16.499a6.039 6.039 0 01-4.711-2.276.733.733 0 01-.184-.08A4.106 4.106 0 015.25 9.552a.751.751 0 01.723-.551h.19c.019-.077.039-.15.06-.22a.752.752 0 01.689-.535 4.427 4.427 0 002.598-.977 6.319 6.319 0 001.776-2.322.749.749 0 011.37.001 6.308 6.308 0 001.776 2.322c.732.593 1.655.94 2.598.976a.748.748 0 01.688.532c.021.071.042.144.062.223h.194c.337 0 .634.227.723.552a4.108 4.108 0 01-1.836 4.591.795.795 0 01-.184.08l-.003.001a5.965 5.965 0 01-4.693 2.274zm-2.467-2.232c.727.476 1.58.731 2.47.731.877 0 1.721-.252 2.452-.731a3.571 3.571 0 01-1.015-.442c-.589-.376-1.074-.921-1.447-1.626-.372.705-.856 1.25-1.445 1.625a3.59 3.59 0 01-1.015.443zm-1.737-1.462c.252.063.501.095.738.095.447 0 .854-.115 1.208-.341.589-.375 1.04-1.083 1.319-2.059H6.609c-.044.909.4 1.802 1.168 2.305zm5.13-2.304c.28.977.732 1.685 1.321 2.06.354.225.76.34 1.207.34.238 0 .485-.032.737-.095a2.623 2.623 0 001.167-2.304h-4.432zm1.421-1.5a5.781 5.781 0 01-.841-.566 7.74 7.74 0 01-1.516-1.65 7.784 7.784 0 01-1.515 1.649 5.945 5.945 0 01-.843.567h4.715z"}})])
          )
        }
      }
    