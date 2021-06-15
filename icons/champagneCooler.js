
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
            children.concat([_c('path',{attrs:{"d":"M3.106 14.216a.754.754 0 01-.721-.546l-.378-1.335a1.528 1.528 0 01-.04-.336 1.5 1.5 0 011.5-1.498h2.164l4.002-4.713a.8.8 0 01.041-.045 5.298 5.298 0 014.455-1.485l1.113.159L19.22.44a1.489 1.489 0 011.06-.439c.4 0 .777.156 1.059.438L22.403 1.5c.585.585.585 1.536.001 2.121L18.426 7.6l.159 1.113c.075.597.08 1.196.015 1.788h1.24a1.485 1.485 0 011.227.64 1.492 1.492 0 01.232 1.194l-.378 1.336a.753.753 0 01-.927.516.75.75 0 01-.516-.926L19.835 12H3.472l.357 1.261a.751.751 0 01-.723.955zm13.978-3.715c.075-.536.08-1.068.014-1.588l-.21-1.472a.755.755 0 01.212-.637l2.121-2.121-1.061-1.061-2.122 2.121a.754.754 0 01-.637.211l-1.483-.212a3.788 3.788 0 00-3.162 1.041L7.6 10.501h9.484zm3.198-6.879l1.061-1.061-1.061-1.06-1.06 1.06 1.06 1.061z"}}),_c('path',{attrs:{"d":"M1.905 19.501a.75.75 0 01-.568-1.239l3.75-4.358a.75.75 0 111.137.978l-3.75 4.358a.75.75 0 01-.569.261zM21.28 19.501a.748.748 0 01-.569-.261l-3.75-4.358a.743.743 0 01-.18-.545.75.75 0 011.317-.432l3.75 4.358a.743.743 0 01.18.545.752.752 0 01-.748.693zM7.218 24.001c-1.074 0-2-.761-2.208-1.813l-.817-2.883a.75.75 0 011.443-.409l.826 2.915a.795.795 0 01.016.072.75.75 0 00.738.618h8.875a.748.748 0 00.738-.619.917.917 0 01.018-.078l.828-2.908a.753.753 0 01.925-.516.746.746 0 01.517.928l-.819 2.877a2.252 2.252 0 01-2.208 1.817H7.218z"}})])
          )
        }
      }
    