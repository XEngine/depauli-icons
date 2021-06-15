
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
            children.concat([_c('path',{attrs:{"d":"M12.164 5.198c-.299 0-.581-.116-.793-.327a1.118 1.118 0 01-.331-.794v-.003a1.115 1.115 0 01.327-.795c.212-.213.494-.33.794-.331h.001a1.122 1.122 0 011.116.992.748.748 0 010 .268c-.065.537-.5.95-1.042.984a.363.363 0 01-.07.005h-.002z"}}),_c('path',{attrs:{"d":"M9.845 23.967a6.066 6.066 0 01-4.527-2.002c-1.102-1.1-.956-2.618-.235-3.541.424-.543 1.024-.854 1.645-.854.349 0 .699.099 1.012.287a.75.75 0 01-.772 1.286.456.456 0 00-.237-.073c-.155 0-.329.104-.465.278-.235.301-.471.974.139 1.583a4.613 4.613 0 003.438 1.536 4.586 4.586 0 003.089-1.194c.483-.438.86-.962 1.122-1.559.399-1.229.296-2.811.154-4.998-.081-1.241-.173-2.646-.196-4.308a10.661 10.661 0 012.518-8.075l.004-.008a8.523 8.523 0 00-3.973-.834c-2.075 0-2.8.521-3.64 1.123-.546.392-1.165.836-2.125 1.076-1.293.326-2.35.555-3.141.68l.009.94c1.708.324 3.46.531 5.202.604h.001c1.362 0 1.869.726 2.048 1.159.443 1.07-.173 2.405-.762 3.03a7.161 7.161 0 00-1.309 3.977c0 1.763 1.869 3.047 1.887 3.06a.746.746 0 01.207 1.039.75.75 0 01-1.04.208c-.104-.07-2.554-1.732-2.554-4.324a8.677 8.677 0 011.62-4.878.795.795 0 01.08-.094c.328-.326.627-1.101.485-1.444-.084-.204-.471-.234-.695-.234a36.655 36.655 0 01-5.456-.639 1.484 1.484 0 01-1.214-1.465v-.95c0-.738.529-1.356 1.257-1.471.512-.081 1.45-.26 3.009-.652.683-.171 1.115-.481 1.616-.84.872-.625 1.957-1.404 4.489-1.404a10.017 10.017 0 014.69 1.001 1.48 1.48 0 01.813 1.246c.022.398-.112.781-.377 1.077a9.174 9.174 0 00-2.151 5.485c.665-.434 1.48-.818 2.284-.818.359 0 .694.077.997.228.72.36 1.227 1.242 1.428 2.483.288 1.772-.043 4.189-1.234 5.38-.227.227-.759.76-1.602.856-.086.01-.173.015-.261.015-.423 0-.861-.117-1.307-.348.056 1.473-.005 2.586-.35 3.621a6.067 6.067 0 01-1.528 2.166 6.072 6.072 0 01-4.092 1.583zm5.863-9.282c.542.498 1.03.76 1.417.76a.685.685 0 00.091-.005c.32-.036.563-.28.708-.425.689-.689 1.062-2.557.814-4.08-.131-.806-.405-1.274-.619-1.381a.74.74 0 00-.34-.072c-.723 0-1.71.706-2.263 1.196.007.384.019.766.034 1.156h1.425a.75.75 0 010 1.5h-1.352c.026.446.054.873.081 1.284l.004.067z"}})])
          )
        }
      }
    