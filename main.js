// function lo (id){
//     return document.getElementById(id)
// }
//var droppedIn = false;
//  function drag_start(e) {
//      lo('app_status').innerHTML = "Dragging the " + e.target.getAttribute('id');
//      e.dataTransfer.dropEffect = "move";
//      e.dataTransfer.setData("text", e.target.getAttribute('id')); 
//  }
//
//function drag_enter(e){
//    lo('app_status').innerHTML = "You are dragging the " + e.target.getAttribute('id');
//}
//function darg_leave(e){
//    lo('app_status').innerHTML = "You left the  " + e.target.getAttribute('id');
//}
//
//function darg_drop (e){
//    e.preventDefault();
//    const elem_id = e.dataTransfer.getData("t ext");
//    e.target.appendChild(lo(elem_id));
//    lo('app_status').innerHTML = "Dropped " +elem_id+ " into to"+ e.target.getAttribute('id');
//    lo(elem_id).removeAttribute("draggable");
//    lo(elem_id).style.cursor = "default";
//    droppedIn  =true;
//}
//
//
//function drag_end(e) {
//    if (droppedIn == false){
//        lo('app_status').innerHTML = "You let the " + e.target.getAttribute('id')+ " go.";
//        
//    }
//    droppedIn = false;
//}

function _(id){
   return document.getElementById(id);	
}
var droppedIn = false;
function drag_start(event) {
    _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}
function drag_enter(event) {
    _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}
function drag_leave(event) {
    _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}
function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id');
    _(elem_id).removeAttribute("draggable");
    _(elem_id).style.cursor = "default";
    droppedIn = true;
}
function drag_end(event) {
    if(droppedIn == false){
        _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
	droppedIn = false;
}
function readDropZone(){
    for(var i=0; i < _("drop_zone").children.length; i++){
        alert(_("drop_zone").children[i].id+" is in the drop zone");
    }
    /* Run Ajax request to pass any data to your server */
}