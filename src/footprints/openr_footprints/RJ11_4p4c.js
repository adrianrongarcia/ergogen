// RJ11 4P4C footprint
// Nets
//    A: corresponds to pin 1
//    B: corresponds to pin 2
//    C: corresponds to pin 3
//    D: corresponds to pin 4
// Params
//    side:
//        F: component will be placed on PCB front side
//        B: component will be placed on PCB back side

module.exports = {
  params: {
    designator: '4P4C',
    side: 'F',
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
  },
  body: p => {
    const standard = `
      (module RJ11_4p4c (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      
      ${'' /* footprint outline */}
      (fp_line (start -5 -6) (end 5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -5 -1.5) (end -5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -5 7) (end -5 1.5) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -5 7) (end 5 7) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 5 -1.5) (end 5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 5 7) (end 5 1.5) (stroke (width 0.15) (type default)) (layer ${p.side}.SilkS))
      
      ${'' /* footprint limits */}
      (fp_line (start -5.5 -6.5) (end 5.5 -6.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_line (start -5.5 -1.5) (end -5.5 -6.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_line (start -5.5 7.5) (end -5.5 1.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_line (start -5.5 7.5) (end 5.5 7.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_line (start 5.5 -1.5) (end 5.5 -6.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_line (start 5.5 7.5) (end 5.5 1.5) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_arc (start -5 0)  (end -5.5 1.5) (angle 143) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_arc (start 5 0) (end 5.5 1.5) (angle -143) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      
      ${'' /* fooptrint fabrication info */}
      (fp_line (start -5 7) (end -5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.Fab))
      (fp_line (start -5 7) (end 5 7) (stroke (width 0.15) (type default)) (layer ${p.side}.Fab))
      (fp_line (start 5 -6) (end -5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.Fab))
      (fp_line (start 5 7) (end 5 -6) (stroke (width 0.15) (type default)) (layer ${p.side}.Fab))
      
      ${'' /* fooptrint mounting holes */}
      (pad "" np_thru_hole circle (at -5 0) (size 2.3 2.3) (drill 2.3) (layers F&B.Cu *.Mask))
      (pad "" np_thru_hole circle (at 5 0) (size 2.3 2.3) (drill 2.3) (layers F&B.Cu *.Mask))
      `
    function pins(def_neg, def_pos) {
      return `
        (pad 1 thru_hole roundrect (at ${def_neg}1.53 2.3 ${p.rot}) (size 1.7 1.7) (drill 0.8) (layers *.Cu *.Mask) (roundrect_rratio 0.139) ${p.A.str})
        (pad 2 thru_hole circle (at ${def_pos}0.51 2.3) (size 1.7 1.7) (drill 0.8) (layers *.Cu *.Mask) ${p.B.str})
        (pad 3 thru_hole circle (at ${def_neg}0.51 4.84) (size 1.7 1.7) (drill 0.8) (layers *.Cu *.Mask) ${p.C.str})
        (pad 4 thru_hole circle (at ${def_pos}1.53 4.84) (size 1.7 1.7) (drill 0.8) (layers *.Cu *.Mask) ${p.D.str})
        `
    }
    if(p.side == 'F') {
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