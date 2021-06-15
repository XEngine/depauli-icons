
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
            children.concat([_c('path',{attrs:{"d":"M11.205 22.497a5.258 5.258 0 01-3.902-1.737l-4.6-5.108a2.315 2.315 0 011.72-3.862c.418 0 .829.114 1.19.331l1.119.672-1.077-7.524a2.329 2.329 0 011.754-2.598 2.33 2.33 0 012.539 1.02 2.252 2.252 0 012.249-2.194c1.216 0 2.21.97 2.249 2.177a2.28 2.28 0 01.671-.692 2.277 2.277 0 011.722-.345c.038.007.074.016.111.025a2.29 2.29 0 011.694 2.674l-.137.688c.26-.361.626-.632 1.058-.776a2.128 2.128 0 011.866.25 2.152 2.152 0 01.8 2.576l-2.259 5.648a3.732 3.732 0 00-.268 1.393v2.133a5.274 5.274 0 01-2.1 4.2 5.285 5.285 0 01-3.15 1.05h-3.249zm-6.783-9.206a.813.813 0 00-.604 1.358l4.6 5.107a3.755 3.755 0 002.787 1.241h3.248c.806 0 1.605-.266 2.25-.75a3.768 3.768 0 001.5-3v-2.133c0-.671.126-1.327.376-1.95l2.259-5.648a.643.643 0 00-.595-.879.638.638 0 00-.574.356l-2.3 4.591a.747.747 0 01-.913.374.753.753 0 01-.493-.857l1.211-6.058a.794.794 0 00-.586-.926l-.034-.007a.796.796 0 00-.937.625l-1.182 5.913a.754.754 0 01-.807.6.747.747 0 01-.678-.747V3.747a.75.75 0 00-1.5 0V10.5a.748.748 0 01-.676.746c-.025.002-.049.004-.073.004a.753.753 0 01-.736-.603l-1.17-5.872-.009-.04a.84.84 0 00-1.647.322l1.3 9.083a.753.753 0 01-1.128.75L4.84 13.407a.813.813 0 00-.418-.116z"}})])
          )
        }
      }
    