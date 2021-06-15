
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
            children.concat([_c('path',{attrs:{"d":"M.749 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.074a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.499v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5h-6.75a.75.75 0 010-1.5h2.119A2.262 2.262 0 006 16.5H1.499V21H14.87zM21.482 10.008a.747.747 0 01-.641-.36 6.59 6.59 0 01-.69-1.552 4.83 4.83 0 01-3.652 1.654 4.831 4.831 0 01-3.651-1.653 6.597 6.597 0 01-.692 1.552.744.744 0 01-.641.359.746.746 0 01-.728-.574.742.742 0 01.089-.567c.525-.86.785-1.848.751-2.856V4.986l.001-.032A4.88 4.88 0 0116.499 0a4.88 4.88 0 014.875 4.875.796.796 0 01-.003.069.563.563 0 01.002.042v1a5.168 5.168 0 00.749 2.882.747.747 0 01-.249 1.031.761.761 0 01-.391.109zm-8.203-4.129a3.373 3.373 0 006.44 0 6.243 6.243 0 01-3.22-1.511 6.25 6.25 0 01-3.22 1.511zm3.22-4.379c-1.678 0-3.092 1.256-3.335 2.878a4.697 4.697 0 002.767-1.568c.139-.161.346-.254.568-.254s.428.092.568.254a4.7 4.7 0 002.768 1.568C19.591 2.756 18.177 1.5 16.499 1.5zM17.249 18a.75.75 0 010-1.5h5.203a5.953 5.953 0 00-3.28-4.612L17.03 14.03a.753.753 0 01-.531.215.756.756 0 01-.53-.215l-2.142-2.141a6.085 6.085 0 00-2.557 2.423.753.753 0 01-1.023.282.745.745 0 01-.282-1.022 7.56 7.56 0 013.747-3.275.745.745 0 01.809.165l1.977 1.977 1.976-1.977a.751.751 0 01.809-.166 7.456 7.456 0 014.714 6.953c0 .201-.078.389-.22.531s-.328.22-.528.22h-6z"}})])
          )
        }
      }
    