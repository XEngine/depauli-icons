
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
            children.concat([_c('path',{attrs:{"d":"M11.742 24.017a3.409 3.409 0 01-2.146-.754 3.477 3.477 0 01-.748-.826 3.167 3.167 0 01-2.191.848c-.271 0-.539-.033-.798-.097-.724-.181-1.331-.598-1.711-1.175a2.6 2.6 0 01-.267-.529c-.292.124-.6.188-.91.188-.168 0-.335-.02-.496-.058C1.442 21.37.8 20.416.8 19.125l.002-.057c.004-.053.45-5.949.751-9.383C2.081 3.711 6.104 0 12.05 0c5.951 0 9.973 3.711 10.497 9.685.261 3.011.637 7.897.746 9.323l.005.06.002.058c0 1.291-.642 2.244-1.677 2.489a2.162 2.162 0 01-.496.057c-.31 0-.618-.064-.91-.188a2.575 2.575 0 01-.267.529c-.379.576-.987.994-1.711 1.175a3.285 3.285 0 01-.799.097c-.84 0-1.612-.303-2.19-.847a3.415 3.415 0 01-.514.621 3.436 3.436 0 01-2.387.958l-.073-.001a4.313 4.313 0 01-.227-.012 3.47 3.47 0 01-.307.013zm.308-1.517c.029 0 .059.002.088.005.053.006.112.01.17.011l.069.001c.495 0 .952-.188 1.322-.542a1.94 1.94 0 00.601-1.366.751.751 0 011.478-.166c.21.842.826 1.344 1.648 1.344.152 0 .303-.019.451-.056.358-.09.65-.283.822-.544.193-.293.236-.684.125-1.13a.75.75 0 011.399-.518c.233.465.635.631.909.631a.639.639 0 00.148-.017c.458-.108.518-.725.521-1.002-.026-.342-.46-6.02-.747-9.337-.45-5.129-3.9-8.315-9.003-8.315-5.099 0-8.549 3.187-9.003 8.316-.284 3.24-.695 8.65-.747 9.335.003.277.063.894.521 1.002a.648.648 0 00.149.017c.274 0 .677-.165.909-.631a.746.746 0 01.93-.369c.36.133.561.514.469.886-.112.447-.069.837.124 1.13.172.262.464.455.822.544.148.037.299.056.451.056.821 0 1.437-.503 1.648-1.345a.75.75 0 011.477.165 1.94 1.94 0 00.733 1.483 1.926 1.926 0 001.435.414l.081-.002z"}}),_c('path',{attrs:{"d":"M12.05 18.75a.753.753 0 01-.497-.188 9.451 9.451 0 00-.778-.601C9.558 17.087 8.3 16.183 8.3 12.029c.123-1.922 1.699-3.409 3.588-3.409.054 0 .108.001.162.004.055-.002.109-.004.164-.004a3.602 3.602 0 013.585 3.36l.001.049c0 4.154-1.258 5.058-2.475 5.932-.257.185-.522.375-.778.601a.753.753 0 01-.497.188zm-.164-8.63c-1.099 0-2.016.86-2.088 1.957.001 3.336.777 3.893 1.852 4.665.132.095.265.19.4.292.135-.102.268-.197.397-.29 1.074-.772 1.849-1.328 1.853-4.69a2.1 2.1 0 00-2.208-1.931l-.042.001-.041-.001-.123-.003zM16.175 8.625a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.71.71 0 01-.001-.261c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.699.699 0 01.001.26c-.061.513-.47.923-.983.983a.717.717 0 01-.131.012zM7.925 8.625a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM13.55 7.125a.749.749 0 01-.416-1.374l2.25-1.5a.75.75 0 01.833 1.248l-2.25 1.5a.75.75 0 01-.417.126zM10.549 7.125a.753.753 0 01-.416-.126l-2.25-1.5a.75.75 0 01.833-1.248l2.25 1.5a.751.751 0 01-.417 1.374z"}})])
          )
        }
      }
    