
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
            children.concat([_c('path',{attrs:{"d":"M7.499 16.853c-.418 0-.831-.074-1.227-.22C2.464 15.304 0 12.168 0 8.645 0 3.878 4.542 0 10.125 0c3.554 0 6.784 1.543 8.639 4.128 1.51 2.104 1.886 4.615 1.057 7.07a.75.75 0 11-1.421-.48c.67-1.985.366-4.015-.854-5.716C15.971 2.809 13.197 1.5 10.125 1.5 5.369 1.5 1.5 4.705 1.5 8.645c0 2.876 2.072 5.457 5.278 6.576.239.088.48.132.722.132.294 0 .581-.063.852-.189a2.028 2.028 0 001.154-1.49 3.689 3.689 0 013.582-2.859 3.69 3.69 0 011.714.422.751.751 0 01-.348 1.414c-.12 0-.24-.03-.347-.086a2.18 2.18 0 00-2.15.07 2.168 2.168 0 00-.985 1.35 3.522 3.522 0 01-1.993 2.541 3.5 3.5 0 01-1.48.327z"}}),_c('path',{attrs:{"d":"M6 12.75c-1.241 0-2.25-1.009-2.25-2.25S4.759 8.25 6 8.25s2.25 1.009 2.25 2.25S7.241 12.75 6 12.75zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM8.25 7.5C7.009 7.5 6 6.491 6 5.25S7.009 3 8.25 3s2.25 1.009 2.25 2.25S9.491 7.5 8.25 7.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM14.25 9C13.009 9 12 7.991 12 6.75s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25S15.491 9 14.25 9zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM17.25 24a.742.742 0 01-.22-.033l-2.999-.917a.745.745 0 01-.531-.717v-3.438l-1.5-.563v1.918a.75.75 0 01-1.5 0v-3a.74.74 0 01.044-.247.706.706 0 01.226-.326l.041-.032a.69.69 0 01.199-.104l5.979-2.243a.742.742 0 01.526-.001l6 2.25c.289.11.485.392.485.703s-.196.593-.487.702L21 18.895v3.438c0 .332-.213.62-.531.717l-3 .917a.73.73 0 01-.219.033zm0-1.534l2.25-.688v-2.321l-1.987.745a.742.742 0 01-.526 0L15 19.457v2.321l2.25.688zm0-3.767l3.864-1.449-3.864-1.449-3.864 1.449 3.864 1.449z"}})])
          )
        }
      }
    