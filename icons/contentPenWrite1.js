
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
            children.concat([_c('path',{attrs:{"d":"M5.835 17.85a.754.754 0 01-.75-.791c.033-.61.251-3.704 1.279-4.732a2.988 2.988 0 011.419-.797.753.753 0 01.172-.794l6.34-6.341.023-.026L18.031.658C18.455.234 19.02 0 19.622 0s1.167.234 1.591.658l1.061 1.061c.678.678.843 1.713.439 2.56l.621.622a2.252 2.252 0 010 3.181l-4.773 4.773a.744.744 0 01-1.06 0 .749.749 0 010-1.06l4.773-4.773a.752.752 0 000-1.061l-.53-.53-9.546 9.547a.744.744 0 01-.796.172 2.968 2.968 0 01-.795 1.419c-1.028 1.028-4.122 1.246-4.732 1.279-.006.002-.033.002-.04.002zm2.652-4.901c-.401 0-.777.156-1.061.439-.302.302-.611 1.481-.768 2.889 1.408-.157 2.587-.465 2.89-.768.283-.283.438-.659.438-1.061a1.494 1.494 0 00-1.499-1.499zm3.182.44l5.303-5.303-2.122-2.121-5.303 5.303 2.122 2.121zm6.363-6.364l3.184-3.184a.751.751 0 00-.001-1.059l-1.061-1.061c-.141-.141-.33-.219-.53-.219s-.389.078-.53.219L15.91 4.903l2.122 2.122zM2.999 24.001c-1.654 0-3-1.346-3-3s1.346-3 3-3h.747a.75.75 0 010 1.5h-.747c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h15.75a.75.75 0 010 1.5H2.999z"}})])
          )
        }
      }
    