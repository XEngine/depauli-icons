
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
            children.concat([_c('path',{attrs:{"d":"M9.375 9.375a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM14.625 9.375a.817.817 0 01-.131-.011 1.127 1.127 0 01-.983-.983.808.808 0 010-.261c.06-.513.47-.923.983-.983a.717.717 0 01.262 0c.513.06.922.47.982.983a.698.698 0 010 .26c-.06.513-.469.923-.982.983a.717.717 0 01-.131.012zM12 24c-5.243 0-8.25-1.64-8.25-4.5.034-.63.152-1.237.352-1.824a.748.748 0 01.143-.387 6.675 6.675 0 012.857-3.259 2.99 2.99 0 011.101-1.965 2.972 2.972 0 012.169-.649c.573.005 1.13.153 1.628.432a3.382 3.382 0 011.628-.432l.067-.006a3.022 3.022 0 013.203 2.619 6.687 6.687 0 012.865 3.27.752.752 0 01.133.363c.201.586.319 1.189.353 1.796.001 1.464-.781 2.638-2.26 3.416C16.568 23.622 14.554 24 12 24zm-6.663-5.158a4.947 4.947 0 00-.088.699C5.25 22.285 10.416 22.5 12 22.5c6.092 0 6.75-2.098 6.75-3a4.891 4.891 0 00-.085-.66A14.044 14.044 0 0112 20.25a13.996 13.996 0 01-6.663-1.408zm6.696-.091a12.515 12.515 0 006.129-1.337 5.194 5.194 0 00-2.345-2.259.752.752 0 01-.415-.805c.005-.031.01-.063.012-.094a1.517 1.517 0 00-1.61-1.35l-.064.006a.527.527 0 01-.063.004l-.024-.001c-.435.002-.85.15-1.183.418a.75.75 0 01-.941 0 1.9 1.9 0 00-1.185-.418.808.808 0 01-.092-.004 1.486 1.486 0 00-1.11.324 1.497 1.497 0 00-.556 1.013l-.001.008c.003.031.007.063.013.094a.753.753 0 01-.415.805 5.177 5.177 0 00-2.343 2.26 12.538 12.538 0 006.131 1.336l.028-.001.034.001z"}}),_c('path',{attrs:{"d":"M20.272 12.371c-.672 0-1.33-.178-1.903-.516a.747.747 0 01.381-1.396c.134 0 .265.036.38.104a2.25 2.25 0 001.141.309c.447 0 .876-.128 1.243-.371a2.253 2.253 0 00.634-3.118 2.245 2.245 0 00-2.706-.847c.039.307.058.616.058.92a.75.75 0 01-1.5 0c0-.398-.04-.797-.118-1.186A6.02 6.02 0 0012 1.456a6.018 6.018 0 00-5.88 4.806C6.04 6.66 6 7.059 6 7.456a.75.75 0 01-1.5 0c0-.305.019-.614.057-.921A2.25 2.25 0 002.484 10.5c.367.243.797.371 1.243.371.404 0 .799-.107 1.141-.309a.752.752 0 011.027.265.751.751 0 01-.265 1.027 3.753 3.753 0 01-1.903.516 3.738 3.738 0 01-2.072-.62A3.753 3.753 0 01.6 6.554a3.74 3.74 0 013.127-1.675c.4 0 .791.062 1.166.185C5.913 2.037 8.778-.044 12-.044s6.086 2.08 7.107 5.108a3.724 3.724 0 011.166-.185 3.74 3.74 0 013.128 1.676 3.755 3.755 0 01-1.057 5.197 3.745 3.745 0 01-2.072.619z"}})])
          )
        }
      }
    