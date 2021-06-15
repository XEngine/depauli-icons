
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75 8.99 8.99 0 00-8.046-8.95l2.027 8.781a.751.751 0 01-1.462.337L12 16.835l-1.519 6.583a.747.747 0 01-.898.563.744.744 0 01-.469-.334.746.746 0 01-.095-.566l2.026-8.781A8.99 8.99 0 003 23.25a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75zM12 12a6.023 6.023 0 01-4.708-2.287 4.024 4.024 0 01-.539.038c-.83 0-1.646-.233-2.359-.674a4.465 4.465 0 01-2.013-2.795c-.276-1.17-.079-2.377.553-3.4S4.559 1.146 5.729.87a4.493 4.493 0 011.02-.12c.61 0 1.219.126 1.777.365A5.93 5.93 0 0112 0c1.256 0 2.453.385 3.475 1.115A4.503 4.503 0 0117.246.75a4.503 4.503 0 013.819 2.133c.632 1.022.829 2.229.553 3.399s-.99 2.163-2.013 2.795a4.49 4.49 0 01-2.36.674c-.168 0-.345-.012-.539-.038A6.016 6.016 0 0112 12zM7.558 6.691C7.894 8.854 9.779 10.5 12 10.5s4.106-1.646 4.442-3.809c-.916-.141-1.577-.537-1.97-1.18-.654-1.071-.29-2.49-.001-3.267A4.446 4.446 0 0012 1.5a4.44 4.44 0 00-2.47.744c.288.776.652 2.195-.002 3.266-.393.644-1.054 1.04-1.97 1.181zM6.751 2.25c-.228 0-.456.027-.678.08-.78.184-1.442.66-1.863 1.342a2.976 2.976 0 00-.369 2.266c.184.78.66 1.442 1.342 1.863.38.236.807.382 1.248.429A6.015 6.015 0 016 6a.75.75 0 01.75-.75c.538 0 1.235-.09 1.498-.522.341-.559.035-1.615-.212-2.188-.399-.19-.84-.29-1.282-.29l-.004-.375.001.375zm9.214.289c-.247.575-.553 1.634-.212 2.19.263.43.96.521 1.498.521A.75.75 0 0118 6c0 .762-.148 1.522-.431 2.228a2.984 2.984 0 002.59-2.29 2.976 2.976 0 00-.369-2.266 2.981 2.981 0 00-2.542-1.422l-.002-.375v.375c-.442 0-.882.1-1.281.289z"}})])
          )
        }
      }
    