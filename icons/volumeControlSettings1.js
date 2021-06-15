
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
            children.concat([_c('path',{attrs:{"d":"M8.133 14.901a.754.754 0 01-.463-.16 8.346 8.346 0 01-2.26-2.74H2.25A2.252 2.252 0 010 9.751v-3a2.252 2.252 0 012.25-2.25h3.158a8.289 8.289 0 017.341-4.5 2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75 6.747 6.747 0 00-6.179 4.05.751.751 0 01-.688.45H2.25a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3.633c.297 0 .567.176.687.448a6.824 6.824 0 002.026 2.612.746.746 0 01.127 1.053.746.746 0 01-.59.287zM17.25 18.751c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M17.253 24c-.202 0-.404-.03-.6-.089a2.073 2.073 0 01-1.395-1.395l-.441-1.45a.247.247 0 00-.29-.168l-1.47.34a2.08 2.08 0 01-1.581-.271 2.087 2.087 0 01-.414-3.188l1.031-1.111a.252.252 0 00.001-.341l-1.032-1.112a2.069 2.069 0 01-.557-1.498c.02-.558.257-1.074.665-1.454a2.077 2.077 0 011.882-.508l1.477.342a.245.245 0 00.287-.168l.443-1.454a2.08 2.08 0 013.984.01l.441 1.45a.247.247 0 00.289.168l1.471-.34c.154-.035.309-.052.463-.052a2.088 2.088 0 011.53 3.512l-1.031 1.11a.251.251 0 000 .341l1.031 1.112c.38.408.578.94.557 1.498a2.074 2.074 0 01-.665 1.454 2.08 2.08 0 01-1.421.559c-.155 0-.309-.017-.46-.052l-1.476-.342a.245.245 0 00-.287.168l-.443 1.449a2.061 2.061 0 01-1.004 1.23c-.305.163-.645.25-.985.25zm-2.672-4.608c.763 0 1.451.51 1.671 1.239l.442 1.452a.581.581 0 001.112.003l.443-1.451a1.757 1.757 0 012.059-1.193l1.474.342a.588.588 0 00.714-.555.587.587 0 00-.157-.423l-1.031-1.112a1.757 1.757 0 010-2.383l1.031-1.11a.588.588 0 00-.561-.976l-1.468.34c-.128.03-.26.045-.391.045-.762 0-1.449-.51-1.669-1.239l-.442-1.452a.581.581 0 00-1.113-.008l-.443 1.455a1.754 1.754 0 01-2.06 1.194l-1.473-.342a.586.586 0 00-.526.145.588.588 0 00-.031.832l1.032 1.112a1.757 1.757 0 010 2.383l-1.031 1.11a.588.588 0 00.561.976l1.467-.34c.128-.029.259-.044.39-.044z"}})])
          )
        }
      }
    