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

        ${'' /* Edge Cuts */}
        (fp_line (start -7 -6.5) (end -7 6.490924) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_line (start -6.5 -7) (end 6.5 -7) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_line (start -6.5 6.990924) (end 6.5 7) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_line (start 7 -6.5) (end 7 6.5) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_arc (start -7 -6.5) (mid -6.853553 -6.853553) (end -6.5 -7) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_arc (start -6.5 6.990924) (mid -6.853553 6.844477) (end -7 6.490924) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_arc (start 6.5 -7) (mid 6.853553 -6.853553) (end 7 -6.5) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        (fp_arc (start 7 6.5) (mid 6.853553 6.853553) (end 6.5 7) (stroke (width 0.010007) (type solid)) (layer Edge.Cuts))
        
        ${'' /* Drawing of MX Switch area*/}
        (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
        (fp_line (start -9.525 9.525) (end -9.525 -9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
        (fp_line (start 9.525 -9.525) (end 9.525 9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
        (fp_line (start 9.525 9.525) (end -9.525 9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
    `
}