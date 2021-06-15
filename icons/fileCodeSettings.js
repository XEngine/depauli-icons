
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
            children.concat([_c('path',{attrs:{"d":"M17.252 18.754c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M17.255 24.01c-.202 0-.404-.03-.6-.089a2.073 2.073 0 01-1.395-1.395l-.441-1.449a.246.246 0 00-.287-.169l-1.472.341a2.087 2.087 0 01-.463.052 2.104 2.104 0 01-2.038-1.629 2.087 2.087 0 01.508-1.882l1.031-1.11a.25.25 0 00.001-.341l-1.032-1.112a2.069 2.069 0 01-.557-1.498c.02-.558.257-1.074.665-1.454a2.08 2.08 0 011.882-.508l1.477.342a.245.245 0 00.286-.167l.443-1.454a2.09 2.09 0 011.992-1.483 2.071 2.071 0 011.99 1.479l.443 1.45a.245.245 0 00.286.169l1.473-.341a2.08 2.08 0 011.58.271 2.087 2.087 0 01.413 3.188l-1.031 1.11a.251.251 0 00-.001.342l1.033 1.118c.379.407.577.939.556 1.497a2.076 2.076 0 01-.665 1.454 2.08 2.08 0 01-1.422.559c-.155 0-.309-.017-.46-.052l-1.476-.342a.244.244 0 00-.285.166l-.444 1.455a2.059 2.059 0 01-1.004 1.23 2.083 2.083 0 01-.986.252zm-2.671-4.608c.763 0 1.45.51 1.671 1.24l.441 1.45a.581.581 0 001.112.002l.444-1.455a1.754 1.754 0 012.058-1.193l1.474.342a.588.588 0 00.714-.555.583.583 0 00-.157-.422l-1.033-1.118a1.756 1.756 0 01.002-2.383l1.03-1.11a.588.588 0 00-.561-.975l-1.467.34c-.128.03-.26.045-.391.045-.763 0-1.45-.51-1.67-1.24l-.443-1.451a.578.578 0 00-.554-.412.584.584 0 00-.557.414l-.444 1.457a1.756 1.756 0 01-2.059 1.194l-1.474-.342a.588.588 0 00-.714.555.583.583 0 00.157.422l1.032 1.112a1.756 1.756 0 01-.001 2.385l-1.03 1.11a.588.588 0 00.561.976l1.467-.34c.129-.033.26-.048.392-.048z"}}),_c('path',{attrs:{"d":"M2.252 21.004a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h10.629a2.239 2.239 0 011.591.66l2.872 2.87c.425.426.659.991.659 1.592v1.628a.75.75 0 01-1.5 0V5.126a.748.748 0 00-.219-.531l-2.872-2.871a.75.75 0 00-.53-.221H2.252a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M7.502 10.504c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM3.752 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12.752 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM4.502 18.004c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3z"}})])
          )
        }
      }
    