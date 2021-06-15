
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
            children.concat([_c('path',{attrs:{"d":"M2.447 19.501a.725.725 0 01-.231-.037A2.465 2.465 0 010 17.061V2.251A2.252 2.252 0 012.25.001h4.5A2.252 2.252 0 019 2.251v.75h9.75A2.252 2.252 0 0121 5.251v2.25h.75c.601 0 1.166.234 1.591.658a2.235 2.235 0 01.583 2.171.75.75 0 01-1.373.182.745.745 0 01-.075-.569.746.746 0 00-.725-.942H7.879a.755.755 0 00-.722.542l-2.351 8.154a2.341 2.341 0 01-.109.304H8.25a.75.75 0 010 1.5H2.447zm-.197-18a.75.75 0 00-.75.75v14.8a.95.95 0 00.95.927.96.96 0 00.914-.692l2.352-8.158a2.26 2.26 0 012.162-1.626H19.5v-2.25a.75.75 0 00-.75-.75H8.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5z"}}),_c('path',{attrs:{"d":"M13.363 24a1.542 1.542 0 01-1.333-.768 1.543 1.543 0 01-.089-1.357l1.243-2.853-2.234-2.202a1.425 1.425 0 01-.472-.981 1.484 1.484 0 011.482-1.59l.056.001h2.493l1.342-2.889c.208-.395.536-.67.932-.791a1.542 1.542 0 011.826.761c.004.008.017.033.02.042l1.335 2.877h2.552c.8 0 1.45.627 1.482 1.427a1.48 1.48 0 01-.495 1.166l-2.207 2.176 1.237 2.841a1.543 1.543 0 01-.825 2.019 1.54 1.54 0 01-1.356-.089l-3.114-1.747-3.12 1.755a1.497 1.497 0 01-.755.202zm-.041-1.538c.001 0 .002.012.007.021a.04.04 0 00.032.018l3.511-1.97a.757.757 0 01.736.001l3.488 1.958a.051.051 0 00.028.009c.028-.009.038-.034.031-.05l-1.437-3.301a.754.754 0 01.161-.834l2.6-2.562-2.991.001a.752.752 0 01-.68-.435l-1.529-3.293a.05.05 0 00-.017-.015l-.148-.362.11.358a.05.05 0 00-.03.025l-1.526 3.287a.753.753 0 01-.68.434h-2.987l2.603 2.565c.22.216.284.551.161.834l-1.443 3.311zm-1.36-6.711l.002.001.003-.001h-.005z"}})])
          )
        }
      }
    