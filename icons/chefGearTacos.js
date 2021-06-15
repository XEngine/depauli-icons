
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
            children.concat([_c('path',{attrs:{"d":"M9.815 11.215a1.12 1.12 0 01-1.096-.872 1.127 1.127 0 012.193-.507c.068.289.02.59-.138.845a1.115 1.115 0 01-.959.534zM4.842 14.531c-.21 0-.415-.059-.594-.171a1.125 1.125 0 11.594.171zM18.375 7.513c-2.24 0-4.5-1.623-4.5-5.25 0-.044.004-.088.012-.132C14.024.676 16.304.013 18.375.013s4.351.663 4.488 2.118a.737.737 0 01.012.132c0 3.627-2.26 5.25-4.5 5.25zM15.684 4.1c.462 1.226 1.413 1.913 2.691 1.913s2.229-.687 2.691-1.913c-.762.264-1.714.413-2.691.413s-1.929-.149-2.691-.413zm-.295-1.837c.173.24 1.195.75 2.986.75s2.813-.51 2.986-.75c-.173-.24-1.195-.75-2.986-.75s-2.814.51-2.986.75z"}}),_c('path',{attrs:{"d":"M11.763 23.958a6.796 6.796 0 01-4.875-2.059 1.495 1.495 0 01-.301-1.621 6.69 6.69 0 01-1.927-1.389 1.491 1.491 0 01-.402-1.278c.063-.396.276-.744.601-.98l.918-.662a6.75 6.75 0 01-4.552-4.08 1.496 1.496 0 01.127-1.335c.212-.34.544-.577.935-.668L12.414 7.55a1.475 1.475 0 01.341-.039c.782 0 1.424.59 1.492 1.372.039.46.03.925-.027 1.387a1.492 1.492 0 011.267.795c.367.7.604 1.447.708 2.228a1.455 1.455 0 01.452.006 1.49 1.49 0 011.075.775 6.712 6.712 0 01.466 5.149 6.701 6.701 0 01-3.306 3.969 6.734 6.734 0 01-3.119.766zm-3.797-3.102a5.267 5.267 0 002.982 1.535 1.128 1.128 0 01.418-1.205l.008-.006a1.127 1.127 0 011.768 1.091v.001a5.167 5.167 0 001.044-.409 5.255 5.255 0 002.211-7.088l-.001-.372v.375l-1.857 1.339-6.188 4.47a.495.495 0 01-.071.042l-.314.227zm-2.227-3.009a5.253 5.253 0 002.03 1.303l5.417-3.905a1.128 1.128 0 01-.016-1.837 1.13 1.13 0 011.56.242 5.231 5.231 0 00-.569-1.884L9.336 15.25c.106.073.199.165.276.271.174.24.244.537.196.833a1.119 1.119 0 01-.539.787 1.126 1.126 0 01-1.655-.648l-1.875 1.354zm-3.114-6.498a5.219 5.219 0 004.897 3.353h.01l4.968-3.585a5.254 5.254 0 00.253-2.104L2.625 11.349z"}}),_c('path',{attrs:{"d":"M12.105 19.464a1.126 1.126 0 01-1.112-1.303c.048-.296.208-.557.452-.733a1.128 1.128 0 011.571.253 1.122 1.122 0 01-.911 1.783zM16.461 19.094a1.126 1.126 0 11.671-.222 1.136 1.136 0 01-.671.222z"}})])
          )
        }
      }
    