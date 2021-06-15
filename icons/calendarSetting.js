
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
            children.concat([_c('path',{attrs:{"d":"M2.25 18C1.01 18 0 16.99 0 15.75v-12C0 2.509 1.01 1.5 2.25 1.5H4.5V.75a.75.75 0 011.5 0v.75h6V.75a.75.75 0 011.5 0v.75h2.25A2.252 2.252 0 0118 3.75v3a.75.75 0 01-.75.75H1.5v8.25c0 .414.336.75.75.75h6.062a.75.75 0 010 1.5H2.25zM16.5 6V3.75a.75.75 0 00-.75-.75H13.5v.75a.75.75 0 01-1.5 0V3H6v.75a.75.75 0 01-1.5 0V3H2.25a.75.75 0 00-.75.75V6h15zM17.25 18.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M17.249 23.998a2.083 2.083 0 01-1.991-1.483l-.441-1.45a.255.255 0 00-.294-.167l-1.465.34a2.111 2.111 0 01-.465.052 2.078 2.078 0 01-2.038-1.628 2.087 2.087 0 01.509-1.885l1.03-1.11a.252.252 0 00.001-.341l-1.032-1.112a2.069 2.069 0 01-.557-1.498c.02-.557.256-1.074.665-1.454a2.08 2.08 0 011.882-.508l1.476.342a.247.247 0 00.287-.167l.442-1.453a2.082 2.082 0 012.592-1.389 2.075 2.075 0 011.392 1.397l.441 1.449a.246.246 0 00.288.169l1.472-.341c.154-.035.309-.052.463-.052.969 0 1.826.685 2.038 1.629a2.086 2.086 0 01-.508 1.882l-1.03 1.11a.251.251 0 000 .341l1.031 1.112c.38.407.578.939.559 1.497s-.255 1.074-.664 1.455a2.08 2.08 0 01-1.885.509l-1.477-.343a.254.254 0 00-.287.172l-.441 1.446a2.093 2.093 0 01-1.993 1.479zm-2.675-4.606c.763 0 1.453.507 1.677 1.233l.443 1.456a.58.58 0 001.112.003l.443-1.451a1.767 1.767 0 011.675-1.236c.127 0 .255.014.38.042l1.478.344a.588.588 0 00.556-.976l-1.032-1.113a1.757 1.757 0 010-2.383l1.031-1.111a.588.588 0 00-.561-.976l-1.467.34c-.128.03-.26.045-.391.045-.763 0-1.45-.51-1.67-1.24l-.443-1.454a.58.58 0 00-1.111-.003l-.443 1.454a1.757 1.757 0 01-2.059 1.194l-1.474-.342a.586.586 0 00-.526.145.588.588 0 00-.031.833l1.032 1.112a1.757 1.757 0 010 2.383l-1.031 1.111a.59.59 0 00.429.992.576.576 0 00.13-.015l1.468-.341c.129-.032.257-.046.385-.046z"}})])
          )
        }
      }
    