
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
            children.concat([_c('path',{attrs:{"d":"M17.598 23.504a.734.734 0 01-.168-.019l-14.9-3.417a.748.748 0 01-.452-.309A11.916 11.916 0 01.414 9.876 11.922 11.922 0 016.013 2.6a11.975 11.975 0 015.959-1.594c4.295 0 8.288 2.305 10.422 6.016.057.099.109.198.162.298l.017.032c.007.009.02.029.031.05l.051.103c.03.058.058.116.086.173l.028.058c.057.116.102.21.146.305.051.112.098.224.145.337l.025.06.059.142c.063.16.122.321.178.482l.025.068a11.917 11.917 0 01.637 3.739v.154c0 .093.001.185-.002.277a11.99 11.99 0 01-.676 3.704.67.67 0 01-.05.106 11.996 11.996 0 01-5.286 6.294.74.74 0 01-.372.1zm-.124-1.548a10.375 10.375 0 003.996-4.451h-3.735a3.725 3.725 0 01-2.651-1.099l-5.56-5.559a2.242 2.242 0 01-.488-2.451 2.244 2.244 0 012.079-1.391h9.49a10.579 10.579 0 00-8.633-4.498 10.47 10.47 0 00-5.21 1.394C1.743 6.786.007 13.216 2.892 18.234c.085.147.174.294.267.439l14.315 3.283zM11.115 8.505a.747.747 0 00-.693.464.748.748 0 00.162.818l5.56 5.559c.425.425.99.659 1.591.659h4.309c.274-.915.422-1.857.442-2.802v-.163a10.8 10.8 0 00-.001-.316 10.52 10.52 0 00-.688-3.475c-.031-.082-.062-.154-.092-.226l-.065-.157c-.017-.042-.034-.084-.053-.126a41.588 41.588 0 00-.11-.235H11.115z"}})])
          )
        }
      }
    