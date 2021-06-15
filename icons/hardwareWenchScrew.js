
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
            children.concat([_c('path',{attrs:{"d":"M.749 20.121a.743.743 0 01-.53-.22.75.75 0 01-.001-1.061l2.95-2.952a.745.745 0 01.912-.116 5.241 5.241 0 002.66.728 5.286 5.286 0 004.319-2.251h-3.56c-1.654 0-3-1.346-3-3s1.346-3 3-3h3.556a5.244 5.244 0 00-6.281-1.844 5.22 5.22 0 00-2.857 2.826 5.212 5.212 0 00.31 4.69.75.75 0 01-.117.91l-.83.831c-.141.142-.33.22-.53.22s-.389-.078-.53-.22a.744.744 0 010-1.06l.44-.44A6.708 6.708 0 01.536 8.65a6.707 6.707 0 013.673-3.633 6.69 6.69 0 012.541-.5 6.73 6.73 0 016.258 4.201.748.748 0 01-.695 1.033H7.499c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h4.813a.751.751 0 01.696 1.03 6.76 6.76 0 01-.446.903 6.786 6.786 0 01-5.823 3.317 6.743 6.743 0 01-2.901-.659l-2.558 2.56a.748.748 0 01-.531.219zM17.999 10.5c-.827 0-1.5-.673-1.5-1.5V7.5h-.75a.75.75 0 010-1.5h.75V4.372a2.26 2.26 0 01-1.5-2.121 2.252 2.252 0 012.25-2.25h4.5a2.252 2.252 0 012.25 2.25c0 .96-.615 1.808-1.5 2.121V6h.75a.75.75 0 010 1.5h-.75V9c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3V7.5h-3V9zm3-3V4.5h-3V6h3zm-3.75-4.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM17.878 24.002c-.244 0-.488-.061-.705-.177l-2.648-1.433a1.487 1.487 0 01-.722-.894 1.486 1.486 0 01.121-1.142l.713-1.316-.663-.359a.747.747 0 01-.303-1.017.751.751 0 011.018-.303l.662.358.774-1.429a2.252 2.252 0 012.738-3.493l3.958 2.141a2.252 2.252 0 01-1.417 4.203l-.776 1.434.657.355a.747.747 0 01-.357 1.41.74.74 0 01-.357-.091l-.656-.355-.715 1.32a1.494 1.494 0 01-1.322.788zm-.007-1.505l.722-1.316-2.637-1.427-.713 1.318 2.625 1.423.003.002zm1.437-2.634l.714-1.317-2.639-1.427-.713 1.317 2.638 1.427zm2.121-2.264a.747.747 0 00.981-.321.751.751 0 00-.304-1.018l-3.958-2.141a.749.749 0 00-1.018.304.753.753 0 00.28 1.002l.028.013 3.959 2.142c.011.005.021.012.032.019z"}})])
          )
        }
      }
    