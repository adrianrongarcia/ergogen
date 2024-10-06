module.exports = {
  params: {
    designator: '23mm Speaker',
    side: 'F',
    reversible: false, 
    SPEAKER_PLUS: undefined,
    SPEAKER_MINUS: undefined
  },
  body: p => {
    const standard = `
      (module 23mm_Speaker (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      
      ${'' /* fooptrint pinout */}
      (pad "1" thru_hole rect (at 1.25995 16.12 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SPEAKER_PLUS})
      (pad "2" thru_hole oval (at -1.28005 16.12) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SPEAKER_MINUS})
      `
    function side_traces(side) {
      return `
          ${'' /* footprint outline - Pinout*/}
          (fp_line (start -2.61005 17.45) (end -2.61005 14.79) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -0.01005 14.79) (end -2.61005 14.79) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -0.01005 17.45) (end -2.61005 17.45) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -0.01005 17.45) (end -0.01005 14.79) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 1.25995 17.45) (end 2.58995 17.45) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 2.58995 17.45) (end 2.58995 16.12) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          
          ${'' /* footprint outline - Speaker*/}
          (fp_circle (center 0 0) (end 6.525 0) (stroke (width 0.75) (type default)) (fill none) (layer ${side}.SilkS))
          (fp_circle (center 0 0) (end 11.5 0) (stroke (width 0.15) (type default)) (fill none) (layer ${side}.SilkS))
          
          ${'' /* plus symbol */}
          (fp_line (start 1.26 12.7) (end 1.26 13.4936) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 0.8632 13.0968) (end 1.6569 13.0968) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
          (fp_circle (center 1.26 13.0968) (end 2.0417 13.0968) (stroke (width 0.2032) (type solid)) (fill none) (layer ${side}.SilkS))
          
          ${'' /* minus symbol */}
          (fp_line (start -0.8932 13.13) (end -1.6869 13.13) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
          (fp_circle (center -1.29 13.13) (end -0.5083 13.13) (stroke (width 0.2032) (type solid)) (fill none) (layer ${side}.SilkS))
      
          ${'' /* footprint limits */}
          (fp_line (start -3.09 17.99) (end -3.09 11.6) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 3.06 11.6) (end 3.06 17.99) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 3.06 17.99) (end -3.09 17.99) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_circle (center 0 0) (end 12 0) (stroke (width 0.05) (type default)) (fill none) (layer ${side}.CrtYd))
    
          ${'' /* fooptrint fabrication info */}
          (fp_line (start -2.55005 14.85) (end -2.55005 17.39) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -2.55005 17.39) (end 1.89495 17.39) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 1.89495 17.39) (end 2.52995 16.755) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 2.52995 14.85) (end -2.55005 14.85) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 2.52995 16.755) (end 2.52995 14.85) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
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