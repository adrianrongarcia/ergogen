// PinHeader_2x20_P2.54mm_Vertical
// This footprint is meant to be used as output of another footprint (for example, an MCU)
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
    V5: undefined,
    GP_EXTRA: undefined,
    GND: undefined,
    AGND: undefined,
    GND_Optional: undefined,
    GP14: undefined,
    GP15: undefined,
    GP18: undefined,
    GP23: undefined,
    GP24: undefined,
    GP25: undefined,
    GP8: undefined,
    GP7: undefined,
    GP1: undefined,
    GP12: undefined,
    GP16: undefined,
    GP20: undefined,
    GP21: undefined,
    GP26: undefined,
    GP19: undefined,
    GP13: undefined,
    GP6: undefined,
    GP5: undefined,
    GP0: undefined,
    GP11: undefined,
    GP9: undefined,
    GP10: undefined,
    V3_AUX: undefined,
    GP22: undefined,
    GP27: undefined,
    GP17: undefined,
    GP4: undefined,
    GP3: undefined,
    GP2: undefined,
    V3: undefined,
  },
  body: p => {
    const standard = `
      (module PinHeader_2x20_P2.54 (layer F.Cu) (tedit 20221018)
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
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_neg}1.33 49.59) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_pos}1.27 1.27) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.33 49.59) (end ${def_pos}3.87 49.59) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.27 -1.33) (end ${def_pos}3.87 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.27 1.27) (end ${def_pos}1.27 -1.33) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}3.87 -1.33) (end ${def_pos}3.87 49.59) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        
        ${'' /* fabrication outline*/}
        (fp_line (start ${def_neg}1.27 0) (end 0 -1.27) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}1.27 49.53) (end ${def_neg}1.27 0) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start 0 -1.27) (end ${def_pos}3.81 -1.27) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}3.81 -1.27) (end ${def_pos}3.81 49.53) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}3.81 49.53) (end ${def_neg}1.27 49.53) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))       
        
         ${''/* footprint limits*/}
        (fp_line (start ${def_neg}1.8 -1.8) (end ${def_neg}1.8 50.05) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}1.8 50.05) (end ${def_pos}4.35 50.05) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}4.35 -1.8) (end ${def_neg}1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}4.35 50.05) (end ${def_pos}4.35 -1.8) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        
        ${'' /* pin holes*/}
        (pad 1 thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.V3.str})
        (pad 2 thru_hole oval (at ${def_pos}2.54 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.V5.str})
        (pad 3 thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP2.str})
        (pad 4 thru_hole oval (at ${def_pos}2.54 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP_EXTRA.str})
        (pad 5 thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP3.str})
        (pad 6 thru_hole oval (at ${def_pos}2.54 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 7 thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP4.str})
        (pad 8 thru_hole oval (at ${def_pos}2.54 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP14.str})
        (pad 9 thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.AGND.str})
        (pad 10 thru_hole oval (at ${def_pos}2.54 10.16) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP15.str})
        (pad 11 thru_hole oval (at 0 12.7) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP17.str})
        (pad 12 thru_hole oval (at ${def_pos}2.54 12.7) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP18.str})
        (pad 13 thru_hole oval (at 0 15.24) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP27.str})
        (pad 14 thru_hole oval (at ${def_pos}2.54 15.24) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 15 thru_hole oval (at 0 17.78) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP22.str})
        (pad 16 thru_hole oval (at ${def_pos}2.54 17.78) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP23.str})
        (pad 17 thru_hole oval (at 0 20.32) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.V3_AUX.str})
        (pad 18 thru_hole oval (at ${def_pos}2.54 20.32) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP24.str})
        (pad 19 thru_hole oval (at 0 22.86) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP10.str})
        (pad 20 thru_hole oval (at ${def_pos}2.54 22.86) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND_Optional.str})
        (pad 21 thru_hole oval (at 0 25.4) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP9.str})
        (pad 22 thru_hole oval (at ${def_pos}2.54 25.4) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP25.str})
        (pad 23 thru_hole oval (at 0 27.94) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP11.str})
        (pad 24 thru_hole oval (at ${def_pos}2.54 27.94) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP8.str})
        (pad 25 thru_hole oval (at 0 30.48) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 26 thru_hole oval (at ${def_pos}2.54 30.48) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP7.str})
        (pad 27 thru_hole oval (at 0 33.02) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP0.str})
        (pad 28 thru_hole oval (at ${def_pos}2.54 33.02) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP1.str})
        (pad 29 thru_hole oval (at 0 35.56) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP5.str})
        (pad 30 thru_hole oval (at ${def_pos}2.54 35.56) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 31 thru_hole oval (at 0 38.1) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP6.str})
        (pad 32 thru_hole oval (at ${def_pos}2.54 38.1) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP12.str})
        (pad 33 thru_hole oval (at 0 40.64) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP13.str})
        (pad 34 thru_hole oval (at ${def_pos}2.54 40.64) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 35 thru_hole oval (at 0 43.18) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP19.str})
        (pad 36 thru_hole oval (at ${def_pos}2.54 43.18) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP16.str})
        (pad 37 thru_hole oval (at 0 45.72) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP26.str})
        (pad 38 thru_hole oval (at ${def_pos}2.54 45.72) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP20.str})
        (pad 39 thru_hole oval (at 0 48.26) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 40 thru_hole oval (at ${def_pos}2.54 48.26) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.GP21.str})
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