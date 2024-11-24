module.exports = {
  params: {
    designator: 'PinSocket_1x02_Speaker',
    side: 'F',
    reversible: false,
    SPEAKER_POSITIVE: {type: 'net', value: 'SPEAKER_POSITIVE'},
    SPEAKER_NEGATIVE: {type: 'net', value: 'SPEAKER_NEGATIVE'}
  },
  body: p => {
    const standard = `
      (module PinHeader_1x02_P2.54 (layer F.Cu) (tedit 20221018)
      
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
      ${'' /* fooptrint pinout */} 
      (pad "PLUS" thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SPEAKER_POSITIVE.str})
      (pad "MINUS" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SPEAKER_NEGATIVE.str})
      `
    function side_traces(side) {
      return `
          ${'' /* footprint outline*/}
          (fp_line (start -1.33 -1.33) (end 0 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 0) (end -1.33 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 1.27) (end -1.33 3.87) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 1.27) (end 1.33 1.27) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 3.87) (end 1.33 3.87) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 1.33 1.27) (end 1.33 3.87) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        
          ${'' /* footprint limits */}
          (fp_line (start -1.8 -1.8) (end -1.8 4.35) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start -1.8 4.35) (end 1.8 4.35) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 1.8 4.35) (end 1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
    
          ${'' /* fooptrint fabrication info */}
          (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -1.27 3.81) (end -1.27 -0.635) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 1.27 -1.27) (end 1.27 3.81) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 1.27 3.81) (end -1.27 3.81) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
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