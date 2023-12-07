const app = {
    init : function() {
        console.log('start init');
        app.createPads();
    },

    createPads: function() {
        for (let linePads = 0; linePads < 9; linePads++) {
            const linePadsDiv = docuement.createElement('div');
            linePadsDiv.classlist.add('line');
            document.querySelector("pads").appendchild(linePadsDiv);
        for (let onePads = 0; linePads < 9; linePads++) {
            const linePadsDiv = docuement.createElement('div');
            linePadsDiv.classlist.add('line');
            document.querySelector("pads").appendchild(linePadsDiv);

        }
    },
};