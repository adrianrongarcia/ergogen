module.exports = {
  params: {
    designator: 'VibrationMotor',
    side: 'F',
    reversible: false,
    PLUS: undefined,
    MINUS: undefined
  },
  body: p => {
    const standard = `
      (module VibrationMotor (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      
    
      
      ${'' /* fooptrint pinout */}
      (pad 1 thru_hole rect (at -1.27 12.5 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.PLUS.str})
      (pad 2 thru_hole oval (at 1.27 12.5) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.MINUS.str})
      `
    function side_traces(side) {
      return `
          ${'' /* footprint outline */}
          (fp_line (start -5 -6) (end 5 -6) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
          (fp_line (start -5 -1.5) (end -5 -6) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
          (fp_line (start -5 7) (end -5 1.5) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
          (fp_line (start -5 7) (end 5 7) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
          (fp_line (start 5 -1.5) (end 5 -6) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
          (fp_line (start 5 7) (end 5 1.5) (stroke (width 0.15) (type default)) (layer ${side}.SilkS))
      
          (fp_line (start -2.6 13.83) (end -2.6 12.5) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.27 13.83) (end -2.6 13.83) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 0 11.17) (end 2.6 11.17) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 0 13.83) (end 0 11.17) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 0 13.83) (end 2.6 13.83) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 2.6 13.83) (end 2.6 11.17) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_circle (center 0 0) (end 5 0) (stroke (width 0.12) (type default)) (fill none) (layer ${side}.SilkS))
      
          ${'' /* footprint limits */}
          (fp_line (start -3.07 4.56) (end -3.07 14.3) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start -3.07 14.3) (end 3.08 14.3) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 3.08 14.3) (end 3.08 4.54) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_arc (start -3.07 4.559999) (end 3.079894 4.539841) (angle 292) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
      
          ${'' /* fooptrint fabrication info */}
          (fp_line (start -2.54 11.23) (end 2.54 11.23) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -2.54 13.135) (end -2.54 11.23) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -1.905 13.77) (end -2.54 13.135) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 2.54 11.23) (end 2.54 13.77) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 2.54 13.77) (end -1.905 13.77) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        `
    }
    if(p.reversible) {
      return `
         ${standard}
         ${side_traces('F')}
         ${side_traces('B')})
       `
    } else {
      return `
         ${standard}
         ${side_traces(p.side)})
       `
    }
  }
}