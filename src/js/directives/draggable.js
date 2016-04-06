export default function (Vue) {
    Vue.directive('draggable', {
        bind: function () {},
        update: function (draggedObject) {
            console.log(draggedObject.settings.top);
            var el = this.el;
            el.onmousedown = function(e) {
                var elTop = draggedObject.settings.top;
                var topDifference = e.clientY - parseInt(elTop);
                var elLeft = draggedObject.settings.left;
                var leftDifference = e.clientX - parseInt(elLeft);
                el.onmousemove = function(e) {
                    draggedObject.settings.top = e.clientY - topDifference + 'px';
                    draggedObject.settings.left = e.clientX - leftDifference + 'px';
                };
            };
            el.onmouseup = function (e) {
                el.onmousemove = null;
            };
        },
        unbind: function () {
            // do clean up work
            // e.g. remove event listeners added in bind()
        }
    });
}
