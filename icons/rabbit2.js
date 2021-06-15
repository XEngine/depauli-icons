
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
            children.concat([_c('path',{attrs:{"d":"M9.51 14.759a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.717.717 0 010-.262c.06-.513.47-.922.983-.982a.698.698 0 01.26 0c.513.06.923.469.983.982a.717.717 0 010 .262c-.06.513-.47.922-.983.983a.691.691 0 01-.13.011zM14.895 14.759a.728.728 0 01-.132-.012 1.11 1.11 0 01-.971-.941.734.734 0 01-.021-.171 1.126 1.126 0 011.121-1.126h.01c.62 0 1.125.505 1.125 1.125a.723.723 0 01-.022.175c-.078.492-.47.874-.965.938a.714.714 0 01-.137.013l-.008-.001zM18.671 9.603a.751.751 0 01-.52-1.291c2.094-2.006 4.354-5.006 4.354-6.353 0-.379-.71-.459-1.306-.459-3.27 0-5.174 2.415-5.507 6.984a.75.75 0 01-1.05.632l-.026-.011a7.082 7.082 0 00-2.603-.49h-.008c-.904 0-1.789.169-2.63.501a.747.747 0 01-1.048-.632C7.994 3.915 6.088 1.5 2.816 1.5c-.596 0-1.306.079-1.306.459 0 1.341 2.26 4.342 4.354 6.353a.75.75 0 01-1.039 1.082C4.776 9.347.01 4.737.01 1.959.01 1.227.375 0 2.816 0 6.678 0 9.12 2.63 9.728 7.42a8.62 8.62 0 012.278-.306h.008c.773 0 1.537.102 2.278.305C14.9 2.629 17.341 0 21.2 0c2.441 0 2.806 1.227 2.806 1.959 0 2.788-4.768 7.389-4.816 7.436a.748.748 0 01-.519.208z"}}),_c('path',{attrs:{"d":"M11.683 24.018a3.646 3.646 0 01-2.987-1.569c-.06.005-.118.009-.177.011-.052.002-.1.004-.152.004H8.34a4.593 4.593 0 01-4.581-4.572 4.635 4.635 0 011.538-3.439v-1.204c0-.591.093-1.175.279-1.735A.75.75 0 117 11.985a4.02 4.02 0 00-.203 1.264v1.56c0 .235-.112.46-.301.601a3.095 3.095 0 00-1.237 2.479 3.09 3.09 0 003.085 3.076l.108-.002a2.92 2.92 0 002.039-.95 2.893 2.893 0 00.758-1.689l-1.114-.556a.753.753 0 01.336-1.423c.116 0 .232.028.335.08l1.203.601 1.203-.601a.753.753 0 011.006.336.746.746 0 01-.335 1.006l-1.112.556a2.94 2.94 0 002.899 2.642c.972 0 1.895-.463 2.475-1.237.493-.659.699-1.471.582-2.288s-.545-1.538-1.204-2.03a.754.754 0 01-.301-.601v-1.556c0-.431-.068-.856-.202-1.266a.748.748 0 01.713-.984c.325 0 .611.207.712.516a5.53 5.53 0 01.277 1.735v1.2a4.575 4.575 0 01.625 6.172 4.608 4.608 0 01-3.672 1.839 4.459 4.459 0 01-.349-.016 3.648 3.648 0 01-3.314 1.555 4.08 4.08 0 01-.329.014zm.327-1.519c.029 0 .058.002.088.005a2.133 2.133 0 001.63-.503 4.493 4.493 0 01-1.715-1.501 4.452 4.452 0 01-1.715 1.505 2.128 2.128 0 001.627.5.587.587 0 01.085-.006z"}})])
          )
        }
      }
    