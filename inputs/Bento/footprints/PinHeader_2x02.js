// PinHeader_2x2_P2.54mm_Vertical
// This footprint is meant to be used as a pair of jumpers for powering properly a rp pico MCU when using it in split keyboards
// Params
// flip: default is true (false)
//    if true, footprint will be mirrored (even pins on left side and odd pins on right side) 
//    if false, footprint will have no changes (even pins on right side and odd pins on left side)
// side: default is F (front)
//    in case is B (back), footprint would be placed on that side and also mirrored (in order to look properly when looking from that side)

module.exports = {
  params: {
    designator: 'PinHeader_2x20',
    side: 'F',
    flip: false,
    VOUT: undefined,
    VIN: undefined,
    POWER: undefined,
    OUTPUT: {type: 'net', value: 'OUTPUT'}
  },
  body: p => {
    const standard = `
      (module PinHeader_2x2_P2.54 (layer F.Cu) (tedit 20221018)
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      `

    function pins(def_neg, def_pos) {
      return `
        ${'' /* component outline*/}
        (fp_line (start ${def_neg}1.33 -1.33) (end 0 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 0) (end ${def_neg}1.33 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_neg}1.33 3.87) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_pos}1.27 1.27) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 3.87) (end ${def_pos}3.87 3.87) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.27 -1.33) (end ${def_pos}3.87 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.27 1.27) (end ${def_pos}1.27 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}3.87 -1.33) (end ${def_pos}3.87 3.87) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        
        ${'' /* fabrication outline*/}
        (fp_line (start ${def_neg}1.27 0) (end 0 -1.27) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}1.27 3.81) (end ${def_neg}1.27 0) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start 0 -1.27) (end ${def_pos}3.81 -1.27) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}3.81 -1.27) (end ${def_pos}3.81 3.81) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}3.81 3.81) (end ${def_neg}1.27 3.81) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        
        ${''/* footprint limits*/}
        (fp_line (start ${def_neg}1.8 -1.8) (end ${def_neg}1.8 4.35) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}1.8 4.35) (end ${def_pos}4.35 4.35) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}4.35 -1.8) (end ${def_neg}1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}4.35 4.35) (end ${def_pos}4.35 -1.8) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        
        ${'' /* pin holes*/}
        (pad 1 thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VIN.str})
        (pad 2 thru_hole oval (at ${def_pos}2.54 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VOUT.str})
        (pad 3 thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.OUTPUT.str})
        (pad 4 thru_hole oval (at ${def_pos}2.54 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.POWER.str})
        `
    }
    if(p.side == 'F') {
      if(p.flip == true) {
        return `
          ${standard}
          ${pins('', '-')})
          `
      } else{
        return `
          ${standard}
          ${pins('-', '')})
          `
      }
    }
    else {
      if(p.flip == true) {
        return `
          ${standard}
          ${pins('-', '')})
          `
      } else {
        return `
          ${standard}
          ${pins('', '-')})
          `
      }
    }
  }
}