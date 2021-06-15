
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
            children.concat([_c('path',{attrs:{"d":"M16.496 7.5a2.252 2.252 0 01-2.25-2.25V3a3.005 3.005 0 013-3 .75.75 0 01.001 1.5c-.827 0-1.5.673-1.5 1.5v.13a2.252 2.252 0 012.999 2.12 2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM11.197 7.5c-1.008 0-1.9-.678-2.168-1.65a.751.751 0 01.722-.95c.336 0 .633.226.723.55a.75.75 0 10.723-.95.75.75 0 11-.001-1.5.751.751 0 000-1.5.751.751 0 00-.725.556.75.75 0 01-.724.556.742.742 0 01-.65-.374.745.745 0 01-.075-.569A2.253 2.253 0 0111.777.077a2.254 2.254 0 011.592 2.756 2.244 2.244 0 01-.497.917c.366.409.575.945.576 1.5a2.253 2.253 0 01-2.249 2.251h-.002zM21.746 7.5a2.252 2.252 0 01-2.25-2.25v-3c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3a2.252 2.252 0 01-2.25 2.25zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zM8.246 24.001a2.252 2.252 0 01-2.25-2.25v-10.5A2.254 2.254 0 018.246 9h3a2.252 2.252 0 012.25 2.25v10.5c0 1.241-1.01 2.25-2.25 2.25h-3zm0-13.501a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75h-3z"}}),_c('path',{attrs:{"d":"M9.746 15.376c-.62 0-1.125-.505-1.125-1.125 0-.571.426-1.047.994-1.114a.734.734 0 01.262 0c.568.067.994.542.994 1.114 0 .62-.504 1.125-1.125 1.125zM9.746 21.001a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM15.747 20.209a.75.75 0 01-.5-1.309 8.182 8.182 0 002.724-5.399h-2.224a.75.75 0 010-1.5h2.221a8.279 8.279 0 00-.719-2.688.75.75 0 011.365-.624 9.713 9.713 0 01-2.366 11.329.756.756 0 01-.501.191zM3.746 20.209a.75.75 0 01-.5-.191 9.771 9.771 0 01-2.694-4.02 9.689 9.689 0 01.395-7.452 9.687 9.687 0 015.549-4.99.752.752 0 01.5 1.415 8.192 8.192 0 00-4.695 4.222 8.198 8.198 0 00-.775 2.808h2.22a.75.75 0 010 1.5h-2.22a8.276 8.276 0 002.72 5.399.746.746 0 01.059 1.059.75.75 0 01-.559.25z"}})])
          )
        }
      }
    