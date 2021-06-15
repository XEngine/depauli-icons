
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
            children.concat([_c('path',{attrs:{"d":"M6.376 12.75C2.861 12.75.001 9.89.001 6.375S2.861 0 6.376 0s6.375 2.86 6.375 6.375-2.86 6.375-6.375 6.375zm0-11.25c-2.688 0-4.875 2.187-4.875 4.875s2.187 4.875 4.875 4.875 4.875-2.187 4.875-4.875S9.064 1.5 6.376 1.5z"}}),_c('path',{attrs:{"d":"M15.811 24a.746.746 0 01-.666-.405.749.749 0 01-.049-.572l.114-.359-1.784-.566-.114.359a.748.748 0 01-.942.488.751.751 0 01-.488-.942l.114-.359-1.783-.566-.113.358a.748.748 0 01-.942.488.751.751 0 01-.488-.942l.114-.359L7 20.056l-.114.359a.746.746 0 01-.942.488.751.751 0 01-.488-.942l.115-.363a2.979 2.979 0 01-1.928-2.794c0-.798.31-1.549.875-2.114a2.967 2.967 0 012.114-.876h7.171l1.369-8.581a1.306 1.306 0 011.294-1.106 1.312 1.312 0 01.384.057c1.074.326 2.076.589 3.045.844a82.22 82.22 0 013.176.882c.336.103.612.331.776.64.165.31.198.665.095 1.001l-2.894 9.11a.363.363 0 01-.011.03l-1.803 5.678a1.496 1.496 0 01-1.884.974l-.711-.226-.114.359a.745.745 0 01-.714.524zm1.994-2.086l1.32-4.154c-.255.053-.523.08-.796.08-.46 0-.928-.074-1.393-.221-1.202-.38-2.234-1.195-2.927-2.306H11.08l.978 4.776 5.747 1.825zM6.634 15.313a1.49 1.49 0 00-.45 2.91l4.236 1.345-.871-4.255H6.634zm8.592-.893c.506.861 1.27 1.487 2.162 1.768.32.101.637.152.942.152.358 0 .687-.073.951-.21l.433-.224 1.673-5.268-5.305-1.588-.856 5.37zm6.616-5.211l.61-1.92c-1.037-.312-2-.565-2.933-.81a86.782 86.782 0 01-2.898-.799l-.299 1.876 5.52 1.653z"}})])
          )
        }
      }
    