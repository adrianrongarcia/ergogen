// 
module.exports = {
    params: {
        designator: 'Cutout',
    },
    body: p => `
        (module MX_Cutout (layer F.Cu) (tedit 5B24D78E) 
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* Aesthetic traces (Front)*/}
        (fp_line (start -8 7) (end -8 -7) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_line (start -7 -8) (end 7 -8) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_line (start -7 8) (end 7 8) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_line (start 8 7) (end 8 -7) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_arc (start -7 -7) (end -7 -8) (angle -90) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_arc (start -7 7) (end -8 7) (angle -90) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_arc (start 7 -7) (end 8 -7) (angle -90) (stroke (width 1) (type default)) (layer "F.Cu"))
        (fp_arc (start 7 7) (end 7 8) (angle -90) (stroke (width 1) (type default)) (layer "F.Cu"))
        
        (fp_line (start -8 7) (end -8 -7) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_line (start -7 -8) (end 7 -8) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_line (start -7 8) (end 7 8) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_line (start 8 7) (end 8 -7) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_arc (start -7 -7) (end -7 -8) (angle -90) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_arc (start -7 7) (end -8 7) (angle -90) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_arc (start 7 -7) (end 8 -7) (angle -90) (stroke (width 1) (type default)) (layer "F.Mask"))
        (fp_arc (start 7 7) (end 7 8) (angle -90) (stroke (width 1) (type default)) (layer "F.Mask"))
        
        ${'' /* Doing square cut*/}
        (fp_rect (start -7 -7) (end 7 7) (stroke (width 0.1) (type solid)) (fill solid) (layer "Edge.Cuts"))
    )`
}