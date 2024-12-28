module.exports = {
  params: {
    designator: 'PinHeader_1x05_Joystick',
    side: 'F',
    reversible: false,
    VCC: undefined,
    GND: undefined,
    SCK: undefined,
    MOSI: undefined,
    MISO: undefined,
    SS: undefined
  },
  body: p => {
    const standard = `
      (module PinHeader_1x06_P2.54 (layer F.Cu) (tedit 20221018)
      
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
      ${'' /* fooptrint pinout */} 
      (pad "VCC" thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.VCC.str})
      (pad "GND" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad "SCK" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SCK.str})
      (pad "MOSI" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.MOSI.str})
      (pad "MISO" thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.MISO.str})
      (pad "SS" thru_hole oval (at 0 12.7) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SS.str})
      `
    function side_traces(side) {
      return `
          ${'' /* footprint outline*/}
          (fp_line (start -1.33 -1.33) (end 0 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 0) (end -1.33 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 1.27) (end -1.33 14.03) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 1.27) (end 1.33 1.27) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start -1.33 14.03) (end 1.33 14.03) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
          (fp_line (start 1.33 1.27) (end 1.33 14.03) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        
          ${'' /* footprint limits */}
          (fp_line (start -1.8 -1.8) (end -1.8 14.5) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start -1.8 14.5) (end 1.8 14.5) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
          (fp_line (start 1.8 14.5) (end 1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
    
          ${'' /* fooptrint fabrication info */}
          (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -1.27 13.97) (end -1.27 -0.635) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 1.27 -1.27) (end 1.27 13.97) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
          (fp_line (start 1.27 13.97) (end -1.27 13.97) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
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