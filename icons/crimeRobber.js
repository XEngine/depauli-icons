
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
            children.concat([_c('path',{attrs:{"d":"M12.274 6.782c-1.87 0-3.391-1.521-3.391-3.391S10.405 0 12.274 0c1.87 0 3.391 1.521 3.391 3.391s-1.521 3.391-3.391 3.391zm0-5.282c-1.043 0-1.891.848-1.891 1.891s.848 1.891 1.891 1.891 1.891-.848 1.891-1.891S13.317 1.5 12.274 1.5zM17.965 21.771a2.058 2.058 0 01-1.446-.646l-2.627-2.626a2.08 2.08 0 01-.031-2.897l1.46-1.81-1.068-1.782-1.435.957a.747.747 0 01-1.04-.208.751.751 0 01.208-1.04l2.09-1.393a.753.753 0 01.581-.107.756.756 0 01.478.346l1.742 2.906a.753.753 0 01-.06.857l-1.811 2.244a.692.692 0 01-.053.06.572.572 0 000 .807l2.641 2.641a.586.586 0 00.413.193h.025a.535.535 0 00.382-.156.567.567 0 00.023-.807l-1.495-1.565a.752.752 0 01-.041-.988l1.823-2.263a.757.757 0 01.585-.28c.175 0 .346.062.481.175l2.896 2.422a.575.575 0 00.406.066.754.754 0 01.891.575.745.745 0 01-.103.565.745.745 0 01-.472.326 2.455 2.455 0 01-.42.046h-.001c-.423 0-.819-.12-1.159-.346a.75.75 0 01-.066-.049l-2.349-1.964-.931 1.156.986 1.035a2.056 2.056 0 01.624 1.539 2.062 2.062 0 01-.646 1.448 2.059 2.059 0 01-1.423.567l-.058-.004z"}}),_c('path',{attrs:{"d":"M11.252 10.056a.75.75 0 01-.412-1.378l7.334-4.812a2.073 2.073 0 012.07-.127l3.343 1.671a.75.75 0 01-.67 1.342l-3.344-1.671a.572.572 0 00-.571.036l-7.339 4.815a.745.745 0 01-.411.124z"}}),_c('path',{attrs:{"d":"M23.252 15a.754.754 0 01-.56-.25l-5.135-5.751a.752.752 0 01.122-1.109l1.495-1.075a.75.75 0 01.762-.067l3.64 1.745a.75.75 0 01-.325 1.426.752.752 0 01-.323-.073l-3.24-1.553-.457.329 4.58 5.129A.75.75 0 0123.252 15zM6.001 21.375a.752.752 0 01-.716-.525h-.334a.75.75 0 010-1.5h1.423a.187.187 0 00.176-.119.19.19 0 00-.106-.246L5 18.407a1.68 1.68 0 01-1.062-1.57c0-.451.176-.875.495-1.194.234-.234.525-.39.841-.457a.751.751 0 011.441-.037h.335a.75.75 0 010 1.5H5.628a.185.185 0 00-.134.055.185.185 0 00-.055.134c0 .079.045.147.119.176l1.444.578a1.692 1.692 0 01.942 2.195 1.68 1.68 0 01-1.216 1.026.752.752 0 01-.727.562z"}}),_c('path',{attrs:{"d":"M5.72 24.004a5.702 5.702 0 01-3.913-1.55 5.686 5.686 0 01-1.805-3.993c0-3.318 2.373-4.845 3.66-5.559l-1-1.749a1.189 1.189 0 011.03-1.777H8.31a1.19 1.19 0 011.029 1.779L8.32 12.938c1.246.747 3.681 2.271 3.681 5.5 0 3.068-2.724 5.563-6.073 5.563H5.91a6.067 6.067 0 01-.19.003zm-.38-11.189a.752.752 0 01-.239.999c-.118.077-.268.158-.442.252-1.104.597-3.158 1.708-3.158 4.371a4.179 4.179 0 001.332 2.923 4.209 4.209 0 003.07 1.141c2.541 0 4.598-1.823 4.598-4.064 0-2.446-1.895-3.58-3.027-4.258a6.568 6.568 0 01-.62-.4.753.753 0 01-.191-.964l1.108-1.94h-3.54l1.109 1.94z"}})])
          )
        }
      }
    